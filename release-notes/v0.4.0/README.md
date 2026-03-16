# Release Notes - v0.4.0

## Summary

GEO (Generative Engine Optimization) quick wins release. Addresses 7 critical SEO and AI discoverability issues identified in the GEO audit (baseline score: 39/100). Focuses on technical foundations that were actively harming search indexability and structured data validity.

## Included Features

### GEO Quick Wins ([feature notes](../features/geo-quick-wins/geo-quick-wins.md))

1. **Fixed canonical tags** -- Removed broken default `canonical: '/'` from root layout that told search engines every page was a duplicate of the homepage. Added self-referencing canonicals to all 15 public pages.

2. **Fixed LinkedIn URL** -- Corrected dead link `/company/analytix-code-groove` to `/company/analytixcg` in llms.txt and Organization schema sameAs.

3. **Fixed double-slash URLs in blog schema** -- Stripped trailing slashes from `BASE_URL` to prevent malformed URLs like `https://www.analytixcg.com//blog/...` in breadcrumb and BlogPosting structured data.

4. **Fixed sitemap URL in robots.txt** -- Changed from `https://analytixcg.com/sitemap.xml` to `https://www.analytixcg.com/sitemap.xml` to match the canonical domain.

5. **Improved page load performance** -- Moved Google Analytics scripts from `beforeInteractive` to `afterInteractive` to reduce render-blocking.

6. **Fixed Organization schema** -- Changed logo from `og-cover.jpg` (banner image) to `favicon.svg` (brand mark). Corrected `foundingDate` to `2025-10-24` in ISO 8601 format.

## Breaking Changes

None.

## Migration Steps

None required.
