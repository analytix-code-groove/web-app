# GEO Quick Wins

## What was built and why

Applied the 7 "Quick Win" fixes identified in the GEO audit (score: 39/100) to address critical SEO and AI discoverability issues:

1. **Fixed canonical tags** -- Removed the default `canonical: '/'` from `layout.tsx` that was telling search engines every page is a duplicate of the homepage. Added self-referencing canonicals to all 15 public pages (homepage, about, blog, contact, privacy, terms, services index, 7 service pages, and dynamic service/blog slug pages).

2. **Fixed LinkedIn URL** -- Corrected `/company/analytix-code-groove` (404) to `/company/analytixcg` in both `llms.txt` and the Organization schema `sameAs` array.

3. **Fixed double-slash URLs in blog schema** -- Stripped trailing slashes from `BASE_URL` in `blog/[slug]/page.tsx` to prevent URLs like `https://www.analytixcg.com//blog/...` in breadcrumb and BlogPosting structured data.

4. **Fixed sitemap URL in robots.txt** -- Changed `https://analytixcg.com/sitemap.xml` to `https://www.analytixcg.com/sitemap.xml` to match the canonical domain.

5. **Changed GA script strategy** -- Moved Google Analytics from `beforeInteractive` to `afterInteractive` for better page load performance (Core Web Vitals).

6. **Fixed Organization logo** -- Changed schema logo from `og-cover.jpg` (a banner image) to `favicon.svg` (the actual brand mark).

7. **Fixed foundingDate** -- Corrected from `"2024"` to `"2025-10-24"` (ISO 8601 format).

## Files changed

- `src/app/layout.tsx` -- canonical, logo, foundingDate, sameAs LinkedIn, GA strategy
- `src/app/llms.txt/route.ts` -- LinkedIn URL
- `src/app/blog/[slug]/page.tsx` -- trailing slash strip on BASE_URL
- `src/app/robots.ts` -- sitemap www prefix
- `src/app/page.tsx` -- canonical
- `src/app/about/page.tsx` -- canonical
- `src/app/blog/page.tsx` -- canonical
- `src/app/contact/page.tsx` -- canonical
- `src/app/services/page.tsx` -- canonical
- `src/app/services/ai/page.tsx` -- canonical
- `src/app/services/apps/page.tsx` -- canonical
- `src/app/services/automation-qa/page.tsx` -- canonical
- `src/app/services/consulting/page.tsx` -- canonical
- `src/app/services/data-analytics/page.tsx` -- canonical
- `src/app/services/data-analytics/page.tsx` -- canonical
- `src/app/services/devops/page.tsx` -- canonical
- `src/app/services/staff-augmentation/page.tsx` -- canonical
- `src/app/services/[slug]/page.tsx` -- canonical

## Breaking changes

None.

## Migration steps

None required.
