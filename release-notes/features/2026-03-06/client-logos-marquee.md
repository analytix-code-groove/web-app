# Feature: Client Logos Marquee

## What was built and why

Added a "Trusted by" client logos marquee on the homepage to build credibility with visitors. The marquee displays logos for Roemmers, Rofina, and Presu in an infinite-scroll animation between the Hero and Service Cards sections.

### Changes included

- **Client logos marquee** (`ClientLogos.tsx`): Infinite-scroll logo strip with per-logo container sizing, CSS filters for dark-bg rendering, and gradient fade masks on both edges.
- **Marquee animation** (`globals.css`): `@keyframes marquee` with `prefers-reduced-motion` support.
- **KPI count-up animation** (`MoreInfo.tsx`): Stats (20+ Years, 5 Industries, 6 Core Services) now animate from 0 when scrolled into view using `IntersectionObserver`.
- **i18n**: Added `trustedBy` key (en/es). Renamed "Service Areas" to "Core Services" / "Servicios Core". Updated Spanish `moreInfoBody` copy.
- **CLAUDE.md**: Condensed documentation, added git strategy and release notes sections.

## Breaking changes

None.

## Migration steps

None.
