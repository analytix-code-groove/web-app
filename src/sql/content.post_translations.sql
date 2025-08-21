-- ─────────────────────────────────────────────────────────
-- POST_TRANSLATIONS
-- Public: read translations for published posts
-- Authors/Admins: CRUD on their own posts' translations (admins any)
-- ─────────────────────────────────────────────────────────
alter table content.post_translations enable row level security;

-- Drop existing policies by name (safe if they don't exist)
drop policy if exists post_translations_public_read     on content.post_translations;
drop policy if exists post_translations_author_read_own on content.post_translations;
drop policy if exists post_translations_author_insert   on content.post_translations;
drop policy if exists post_translations_author_update   on content.post_translations;
drop policy if exists post_translations_author_delete   on content.post_translations;

-- Public can read translations only for published posts
create policy post_translations_public_read
on content.post_translations
for select
using (
  exists (
    select 1
    from content.posts p
    where p.slug = post_slug
      and p.status = 'published'
  )
);

-- Authors/Admins can read translations for their own posts (drafts included); admins any
create policy post_translations_author_read_own
on content.post_translations
for select
to authenticated
using (
  api.is_author_or_admin()
  and exists (
    select 1
    from content.posts p
    where p.slug = post_slug
      and (p.author_id = auth.uid() or api.is_admin())
  )
);

-- Insert translations for own posts; admins any
create policy post_translations_author_insert
on content.post_translations
for insert
to authenticated
with check (
  api.is_author_or_admin()
  and exists (
    select 1
    from content.posts p
    where p.slug = post_slug
      and (p.author_id = auth.uid() or api.is_admin())
  )
);

-- Update translations for own posts; admins any (optional but future-proof)
create policy post_translations_author_update
on content.post_translations
for update
to authenticated
using (
  api.is_author_or_admin()
  and exists (
    select 1
    from content.posts p
    where p.slug = post_slug
      and (p.author_id = auth.uid() or api.is_admin())
  )
)
with check (
  api.is_author_or_admin()
  and exists (
    select 1
    from content.posts p
    where p.slug = post_slug
      and (p.author_id = auth.uid() or api.is_admin())
  )
);

-- Delete translations for own posts; admins any
create policy post_translations_author_delete
on content.post_translations
for delete
to authenticated
using (
  api.is_author_or_admin()
  and exists (
    select 1
    from content.posts p
    where p.slug = post_slug
      and (p.author_id = auth.uid() or api.is_admin())
  )
);

create index if not exists idx_post_translations_post on content.post_translations (post_slug);
create index if not exists idx_post_translations_lang on content.post_translations (language_code);
