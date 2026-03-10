# Blog SSR

## What was built and why

Server-side rendered the blog listing page so crawlers see real post titles, excerpts, and links in the initial HTML instead of an empty page that requires JavaScript to populate.

- Made `blog/page.tsx` an async server component that fetches posts from Supabase (English, default language) and passes them as `initialPosts` to `BlogClient`.
- Added `export const revalidate = 60` for ISR (Incremental Static Regeneration).
- `BlogClient` now accepts an `initialPosts` prop used as the default state for `useState`.
- The client-side `useEffect` still re-fetches posts for the active language, handling the Spanish language switch seamlessly.

## Breaking changes

None.

## Migration steps

None.
