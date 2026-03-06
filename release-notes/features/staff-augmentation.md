# Feature: Staff Augmentation Service

## What was built

Added **Staff Augmentation** as the 7th service offering. This includes:

- **Full service page** (`/services/staff-augmentation`) with 7 sections: hero, "when it fits" (4 cards), "what you get" (5 bullets), "how it works" (4 cards with timeline tags), commitment statement, CTA, and related services.
- **i18n support** — ~35 translation keys per language (EN + ES) covering all page content.
- **Service data entry** in `src/data/services.ts` with slug, title, description, card blurb, icons, and 3 features.
- **Navbar dropdown** updated to include Staff Augmentation as the 7th item; dropdown widened to 3-column layout (`w-[45rem]`).
- **Services listing page** renders the new card with `FiUserPlus` icon.
- **Homepage stat counter** updated from 6 → 7 service areas.
- **Dynamic route exclusion** added so the generic `[slug]` page doesn't conflict with the dedicated page.

## Why

Staff Augmentation is a core offering focused on embedding senior engineers into client teams on-demand. Having a dedicated service page communicates this capability alongside the existing six services.

## Breaking changes

None.

## Migration steps

None.
