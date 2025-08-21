grant usage on schema content to anon, authenticated, service_role;
grant usage on schema api to anon, authenticated, service_role;

-- content tables
grant select on all tables in schema content to anon;
grant select, insert, update, delete on all tables in schema content to authenticated;

-- if you want to be explicit (optional):
grant select on table content.vw_post_tags to anon, authenticated;

grant usage, select on all sequences in schema content to authenticated;


alter default privileges in schema content
  grant select on tables to anon;

alter default privileges in schema content
  grant select, insert, update, delete on tables to authenticated;

alter default privileges in schema content
  grant usage, select on sequences to authenticated;

grant select on table api.profiles to authenticated;
grant select on table content.vw_authors_public to anon, authenticated;
