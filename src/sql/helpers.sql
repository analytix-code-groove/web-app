create or replace function api.is_admin()
returns boolean language sql stable as $$
  select exists (
    select 1 from api.profiles p where p.id = auth.uid() and p.role = 'admin'
  );
$$;

create or replace function api.is_author()
returns boolean language sql stable as $$
  select exists (
    select 1 from api.profiles p where p.id = auth.uid() and p.role = 'author'
  );
$$;

create or replace function api.is_client()
returns boolean language sql stable as $$
  select exists (
    select 1 from api.profiles p where p.id = auth.uid() and p.role = 'client'
  );
$$;

create or replace function api.is_author_or_admin()
returns boolean language sql stable as $$
  select api.is_admin() or api.is_author();
$$;

