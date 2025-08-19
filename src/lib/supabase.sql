-- =========================================================
-- Analytix | Code Groove — Base Schema (safe to re-run)
-- =========================================================
begin;

-- ---------- Extensions ----------
create extension if not exists citext;

-- ---------- Schemas ----------
create schema if not exists api;
create schema if not exists reference;
create schema if not exists content;
create schema if not exists app;
create schema if not exists work;
create schema if not exists marketing;
create schema if not exists contact;

-- =========================================================
-- Roles / Profiles
-- =========================================================
-- Enums
do $$
begin
  if not exists (select 1 from pg_type where typname = 'user_role') then
    create type api.user_role as enum ('admin','client','author');
  end if;
end$$;

-- Profiles (1:1 with auth.users)
create table if not exists api.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  role api.user_role not null default 'client',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- updated_at helper + trigger
create or replace function api.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists trg_profiles_updated on api.profiles;
create trigger trg_profiles_updated
before update on api.profiles
for each row execute function api.set_updated_at();

-- Helper: is_admin()
create or replace function api.is_admin()
returns boolean language sql stable as $$
  select exists (
    select 1 from api.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  );
$$;

-- RLS for profiles
alter table api.profiles enable row level security;

drop policy if exists "profiles_self_read" on api.profiles;
create policy "profiles_self_read"
on api.profiles for select
using (id = auth.uid() or api.is_admin());

drop policy if exists "profiles_self_insert" on api.profiles;
create policy "profiles_self_insert"
on api.profiles for insert
with check (id = auth.uid() or api.is_admin());

drop policy if exists "profiles_self_update" on api.profiles;
create policy "profiles_self_update"
on api.profiles for update
using (id = auth.uid() or api.is_admin())
with check (id = auth.uid() or api.is_admin());

drop policy if exists "profiles_self_delete" on api.profiles;
create policy "profiles_self_delete"
on api.profiles for delete
using (id = auth.uid() or api.is_admin());

-- Auto-create a profile on signup
create or replace function api.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp, api
as $$
begin
  insert into api.profiles (id)
  values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function api.handle_new_user();

-- =========================================================
-- Services Catalog
-- =========================================================
create table if not exists reference.services (
  id bigserial primary key,
  slug text not null unique,
  name text not null,
  short_desc text,
  long_desc text,
  icon text,
  sort_order int not null default 100,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists ux_services_slug_lower on reference.services (lower(slug));

drop trigger if exists trg_services_updated on reference.services;
create trigger trg_services_updated
before update on reference.services
for each row execute function api.set_updated_at();

alter table reference.services enable row level security;

drop policy if exists "services_public_read" on reference.services;
create policy "services_public_read"
on reference.services for select
using (active = true);

drop policy if exists "services_admin_write" on reference.services;
create policy "services_admin_write"
on reference.services for all to authenticated
using (api.is_admin()) with check (api.is_admin());

-- =========================================================
-- Blog (Posts, Tags, Post_Tags)
-- =========================================================
do $$
begin
  if not exists (select 1 from pg_type where typname = 'post_status') then
    create type content.post_status as enum ('draft','published','archived');
  end if;
end$$;

create table if not exists content.tags (
  id bigserial primary key,
  slug text not null unique,
  name text not null,
  created_at timestamptz not null default now()
);
create unique index if not exists ux_tags_slug_lower on content.tags (lower(slug));

create table if not exists content.posts (
  slug text primary key,
  title text not null,
  excerpt text,
  body_md text,
  cover_url text,
  status content.post_status not null default 'draft',
  published_at timestamptz,
  author_id uuid not null references api.profiles(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists ix_posts_status_pub on content.posts (status, published_at desc);

drop trigger if exists trg_posts_updated on content.posts;
create trigger trg_posts_updated
before update on content.posts
for each row execute function api.set_updated_at();

create table if not exists content.post_tags (
  post_slug text not null references content.posts(slug) on delete cascade,
  tag_id bigint not null references content.tags(id) on delete cascade,
  primary key (post_slug, tag_id)
);

-- RLS for blog
alter table content.tags enable row level security;
alter table content.posts enable row level security;
alter table content.post_tags enable row level security;

drop policy if exists "tags_public_read" on content.tags;
create policy "tags_public_read"
on content.tags for select using (true);

drop policy if exists "posts_public_read" on content.posts;
create policy "posts_public_read"
on content.posts for select using (status = 'published');

drop policy if exists "post_tags_public_read" on content.post_tags;
create policy "post_tags_public_read"
on content.post_tags for select
using (exists (
  select 1 from content.posts p
  where p.slug = post_slug and p.status = 'published'
));

drop policy if exists "tags_admin_write" on content.tags;
create policy "tags_admin_write"
on content.tags for all to authenticated
using (api.is_admin()) with check (api.is_admin());

drop policy if exists "posts_admin_write_or_author_self" on content.posts;
create policy "posts_admin_write_or_author_self"
on content.posts for all to authenticated
using (api.is_admin() or author_id = auth.uid())
with check (api.is_admin() or author_id = auth.uid());

drop policy if exists "post_tags_admin_write" on content.post_tags;
create policy "post_tags_admin_write"
on content.post_tags for all to authenticated
using (api.is_admin()) with check (api.is_admin());

-- =========================================================
-- Bookmarks
-- =========================================================
create table if not exists app.bookmarks (
  user_id uuid not null references auth.users(id) on delete cascade,
  post_slug text not null references content.posts(slug) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, post_slug)
);

alter table app.bookmarks enable row level security;

drop policy if exists "bookmarks_owner_all" on app.bookmarks;
create policy "bookmarks_owner_all"
on app.bookmarks for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- =========================================================
-- Case Studies
-- =========================================================
do $$
begin
  if not exists (select 1 from pg_type where typname = 'case_status') then
    create type work.case_status as enum ('draft','published');
  end if;
end$$;

create table if not exists work.case_studies (
  id bigserial primary key,
  slug text not null unique,
  title text not null,
  summary text,
  body_md text,
  status work.case_status not null default 'draft',
  published_at timestamptz,
  primary_service_id bigint references reference.services(id) on delete set null,
  metrics jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists ux_case_slug_lower on work.case_studies (lower(slug));

drop trigger if exists trg_case_updated on work.case_studies;
create trigger trg_case_updated
before update on work.case_studies
for each row execute function api.set_updated_at();

alter table work.case_studies enable row level security;

drop policy if exists "cases_public_read" on work.case_studies;
create policy "cases_public_read"
on work.case_studies for select using (status = 'published');

drop policy if exists "cases_admin_write" on work.case_studies;
create policy "cases_admin_write"
on work.case_studies for all to authenticated
using (api.is_admin()) with check (api.is_admin());

-- =========================================================
-- Newsletter + Contact
-- =========================================================
do $$
begin
  if not exists (select 1 from pg_type where typname = 'message_status') then
    create type contact.message_status as enum ('new','read','replied','closed');
  end if;
end$$;

create table if not exists marketing.newsletter_subscribers (
  id bigserial primary key,
  email citext not null unique,
  source text,
  created_at timestamptz not null default now()
);

alter table marketing.newsletter_subscribers enable row level security;

drop policy if exists "newsletter_public_insert" on marketing.newsletter_subscribers;
create policy "newsletter_public_insert"
on marketing.newsletter_subscribers
for insert
to anon, authenticated
with check (true);

drop policy if exists "newsletter_admin_read" on marketing.newsletter_subscribers;
create policy "newsletter_admin_read"
on marketing.newsletter_subscribers
for select
to authenticated
using (api.is_admin());

create table if not exists contact.messages (
  id bigserial primary key,
  name text,
  email text,
  subject text,
  body text not null,
  status contact.message_status not null default 'new',
  created_at timestamptz not null default now()
);

alter table contact.messages enable row level security;

drop policy if exists "contact_public_insert" on contact.messages;
create policy "contact_public_insert"
on contact.messages for insert
to anon, authenticated
with check (true);

drop policy if exists "contact_admin_manage" on contact.messages;
create policy "contact_admin_manage"
on contact.messages for all
to authenticated using (api.is_admin()) with check (api.is_admin());

-- =========================================================
-- Helpful indexes
-- =========================================================
create index if not exists ix_services_active_sort on reference.services (active, sort_order);
create index if not exists ix_bookmarks_user on app.bookmarks (user_id);
create index if not exists ix_cs_status_pub on work.case_studies (status, published_at desc);

commit;

-- =========================================================
-- OPTIONAL one-time backfill (run once, or leave commented)
-- =========================================================
-- insert into api.profiles (id)
-- select u.id
-- from auth.users u
-- left join api.profiles p on p.id = u.id
-- where p.id is null;
