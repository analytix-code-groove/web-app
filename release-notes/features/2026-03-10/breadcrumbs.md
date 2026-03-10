# BreadcrumbList JSON-LD

## What was built and why

Added BreadcrumbList structured data (JSON-LD) to all major pages for improved search engine understanding and rich result eligibility.

- Created `src/lib/breadcrumbs.ts` utility that generates BreadcrumbList JSON-LD from an array of `{ name, url }` items.
- Added breadcrumb schema to:
  - 7 service pages: `Home > Services > [Service Name]`
  - About page: `Home > About`
  - Contact page: `Home > Contact`
  - Blog listing: `Home > Blog`
  - Blog post pages: `Home > Blog > [Post Title]`

## Breaking changes

None.

## Migration steps

None.
