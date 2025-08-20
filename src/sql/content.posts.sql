-- ─────────────────────────────────────────────────────────
-- POSTS
-- Public: only published
-- Authors/Admins: CRUD (authors only own rows; admins any)
-- ─────────────────────────────────────────────────────────
alter table content.posts enable row level security;

-- Drop existing policies by name (safe no-op if missing)
drop policy if exists posts_public_read           on content.posts;
drop policy if exists posts_author_read_own       on content.posts;
drop policy if exists posts_author_insert         on content.posts;
drop policy if exists posts_author_update         on content.posts;
drop policy if exists posts_author_delete         on content.posts;

-- Public read (published only)
create policy posts_public_read
on content.posts
for select
using (status = 'published');

-- Authenticated authors/admins can read their own; admins read any
create policy posts_author_read_own
on content.posts
for select
to authenticated
using (
  api.is_author_or_admin()
  and (author_id = auth.uid() or api.is_admin())
);

-- Authors insert their own; admins can also insert (any author_id)
create policy posts_author_insert
on content.posts
for insert
to authenticated
with check (
  api.is_author_or_admin()
  and (author_id = auth.uid() or api.is_admin())
);

-- Authors update their own; admins any
create policy posts_author_update
on content.posts
for update
to authenticated
using (
  api.is_author_or_admin()
  and (author_id = auth.uid() or api.is_admin())
)
with check (
  api.is_author_or_admin()
  and (author_id = auth.uid() or api.is_admin())
);

-- Authors delete their own; admins any (optional — keep if desired)
create policy posts_author_delete
on content.posts
for delete
to authenticated
using (
  api.is_author_or_admin()
  and (author_id = auth.uid() or api.is_admin())
);

-- Helpful indexes (safe if already present)
create index if not exists ix_posts_status_pub on content.posts (status, published_at desc);
create index if not exists idx_posts_author    on content.posts (author_id);