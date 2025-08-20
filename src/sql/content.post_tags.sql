-- ─────────────────────────────────────────────────────────
-- POST_TAGS (join table)
-- Public: read only links for PUBLISHED posts
-- Authors/Admins: can read links for their OWN drafts, and insert/update/delete for own; Admins any
-- ─────────────────────────────────────────────────────────
alter table content.post_tags enable row level security;

drop policy if exists post_tags_public_read     on content.post_tags;
drop policy if exists post_tags_author_read_own on content.post_tags;
drop policy if exists post_tags_author_insert   on content.post_tags;
drop policy if exists post_tags_author_update   on content.post_tags;
drop policy if exists post_tags_author_delete   on content.post_tags;

-- Public can see links only when the post is published
create policy post_tags_public_read
on content.post_tags
for select
using (
  exists (
    select 1
    from content.posts p
    where p.slug = post_slug
      and p.status = 'published'
  )
);

-- Authors/Admins can see links for their own posts (drafts included); admins any
create policy post_tags_author_read_own
on content.post_tags
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

-- Insert links for own posts; admins any
create policy post_tags_author_insert
on content.post_tags
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

-- Update links for own posts; admins any (optional but future-proof)
create policy post_tags_author_update
on content.post_tags
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

-- Delete links for own posts; admins any
create policy post_tags_author_delete
on content.post_tags
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

create index if not exists idx_post_tags_post on content.post_tags (post_slug);
create index if not exists idx_post_tags_tag  on content.post_tags (tag_id);
