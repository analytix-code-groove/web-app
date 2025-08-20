-- ─────────────────────────────────────────────────────────
-- TAGS
-- Public: read all
-- Authors/Admins: insert/update; Admins: delete
-- ─────────────────────────────────────────────────────────
alter table content.tags enable row level security;

drop policy if exists tags_public_read   on content.tags;
drop policy if exists tags_author_insert on content.tags;
drop policy if exists tags_author_update on content.tags;
drop policy if exists tags_admin_delete  on content.tags;

-- Public read
create policy tags_public_read
on content.tags
for select
using (true);

-- Authors/Admins can insert/update
create policy tags_author_insert
on content.tags
for insert
to authenticated
with check (api.is_author_or_admin());

create policy tags_author_update
on content.tags
for update
to authenticated
using (api.is_author_or_admin())
with check (api.is_author_or_admin());

-- Admins can delete
create policy tags_admin_delete
on content.tags
for delete
to authenticated
using (api.is_admin());

create index if not exists idx_tags_slug on content.tags (slug);