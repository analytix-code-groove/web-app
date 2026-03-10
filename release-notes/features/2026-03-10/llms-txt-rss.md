# LLMs.txt + RSS Fixes

## What was built and why

### llms.txt
Created a `/llms.txt` route handler that serves a structured plain-text file describing the site for AI crawlers and LLM systems. Includes company description, all 7 services, industries served, contact info, and explicit permissions for crawling, training, summarization, and citation. Cached for 24 hours.

### RSS fixes
Improved the RSS feed (`/api/rss.xml`) for better feed reader and AI compatibility:

- Added `export const runtime = 'nodejs'` and `export const dynamic = 'force-dynamic'` per API route conventions.
- Added `published_at` to the Supabase select query.
- Added `<pubDate>` element to each `<item>`.
- Added `<guid isPermaLink="true">` element to each `<item>`.
- Added `<language>en</language>` to the `<channel>`.
- Stripped trailing slash from `baseUrl` to prevent double-slash URLs.
- Changed fallback base URL to `https://www.analytixcg.com`.

## Breaking changes

None.

## Migration steps

None.
