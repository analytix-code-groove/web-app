# Release v0.5.0 — GEO Medium-Term Technical Fixes

**Date:** 2026-03-16

## Summary

Addresses the remaining technical Medium-Term items from the GEO audit (scored 42/100 at baseline). These are code-only improvements to AI search visibility, structured data richness, and security posture — no content changes required.

## Included Features

- **feature/geo-medium-term** — [Full notes](../features/geo-medium-term.md)

## Highlights

### Security
- Added 4 HTTP security headers on all routes: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`

### AI Crawler Access
- Explicit `Allow: /` rules in robots.txt for 7 AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)

### Structured Data (JSON-LD)
- Enhanced WebSite schema with `@id`, `publisher`, and `inLanguage`
- Enhanced BlogPosting schema with `wordCount`, `dateModified`, `speakable`, enriched author, and cross-references
- New Service schema on all 7 service pages + dynamic fallback
- New BreadcrumbList + ItemList schemas on services index

### Sitemap
- All static and service pages now include `lastModified` dates

### LLM Discovery
- Upgraded `llms.txt` with hyperlinked services, dynamic blog section from Supabase, corrected founding date
- New `llms-full.txt` endpoint with expanded service descriptions, leadership info, and technology stack

## Breaking Changes

None.

## Migration Steps

None required.
