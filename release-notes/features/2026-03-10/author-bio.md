# Author Bio on Blog Posts

## What was built and why

Enhanced blog post pages with rich author information to improve E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) for both search engines and AI systems.

- **SQL migration** (`src/sql/add-author-profile-fields.sql`): Adds `bio` and `linkedin_url` columns to `api.profiles` and creates/replaces `content.vw_authors_public` view to expose `avatar_url`, `bio`, and `linkedin_url`.
- **Author card**: Replaced plain "Written by {name}" text with a visual author card showing avatar, name, bio (truncated to 3 lines), and LinkedIn link.
- **BlogPosting JSON-LD**: Author schema now includes `url` (LinkedIn) when available, improving structured data quality.

## Breaking changes

None. New columns have no NOT NULL constraint, so existing profiles continue to work.

## Migration steps

**Required before deploying this feature:**

Run the SQL migration in the Supabase SQL Editor (both local and production):

```sql
-- src/sql/add-author-profile-fields.sql
ALTER TABLE api.profiles ADD COLUMN IF NOT EXISTS bio text;
ALTER TABLE api.profiles ADD COLUMN IF NOT EXISTS linkedin_url text;

CREATE OR REPLACE VIEW content.vw_authors_public AS
SELECT id, full_name, avatar_url, bio, linkedin_url
FROM api.profiles
WHERE role IN ('author', 'admin');
```

Optionally, populate `bio` and `linkedin_url` for existing author/admin profiles.
