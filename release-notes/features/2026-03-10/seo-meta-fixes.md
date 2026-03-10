# SEO Meta Fixes

## What was built and why

Addressed multiple SEO and structured data issues identified in the GEO audit:

- **Canonical URLs**: Changed `metadataBase` from `https://analytixcg.com` to `https://www.analytixcg.com` and added `alternates.canonical` to the root layout and blog post pages. This prevents duplicate content issues between www and non-www versions.
- **Sitemap URLs**: Updated `BASE_URL` in `sitemap.ts` to use `www` prefix so all sitemap entries point to the canonical domain.
- **OG:Image fallback**: Added a default Open Graph image (`/images/og-cover.jpg`) in the root layout metadata and as a fallback for blog posts that lack a cover image.
- **Twitter card**: Blog posts now always use `summary_large_image` since there's always a fallback image.
- **Organization JSON-LD enhancements**: Added `@id`, `description`, `foundingDate`, `contactPoint`, `areaServed`, `knowsAbout` (7 service areas), `numberOfEmployees`, and GitHub to `sameAs`. Updated all URLs to use `www`.
- **BlogPosting JSON-LD**: Updated `publisher.url` to use `www`, added image fallback.

## Breaking changes

None.

## Migration steps

- Ensure `NEXT_PUBLIC_SITE_URL` is set to `https://www.analytixcg.com` in Vercel environment variables.
- Verify `/images/og-cover.jpg` exists and is approximately 1200x630 pixels.
