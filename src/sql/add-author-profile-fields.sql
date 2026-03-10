-- Add bio and linkedin_url columns to profiles
ALTER TABLE api.profiles ADD COLUMN IF NOT EXISTS bio text;
ALTER TABLE api.profiles ADD COLUMN IF NOT EXISTS linkedin_url text;

-- Recreate the public authors view to include the new fields
CREATE OR REPLACE VIEW content.vw_authors_public AS
SELECT
  id,
  full_name,
  avatar_url,
  bio,
  linkedin_url
FROM api.profiles
WHERE role IN ('author', 'admin');
