# Legal Pages (Privacy Policy + Terms of Service)

## What was built and why

Added placeholder Privacy Policy and Terms of Service pages to improve trust signals for both users and AI crawlers.

- **`/privacy`**: Server component with metadata (title, description, canonical). Sections covering information collection, usage, cookies, data retention, and contact.
- **`/terms`**: Server component with metadata. Sections covering site usage, accounts, intellectual property, limitation of liability, and contact.
- **i18n keys**: Added `privacyPolicy`, `termsOfService`, `termsPrefix`, `termsAnd`, `termsSuffix` in both English and Spanish.
- **Auth pages updated**: Login, Signup, and Forgot Password pages now show clickable links to `/terms` and `/privacy` instead of plain text.
- **Footer updated**: Added Privacy Policy and Terms of Service links to the Company column.
- **Sitemap updated**: Added `/privacy` and `/terms` entries with yearly frequency and low priority.

**Note:** These are placeholder legal pages. They should be reviewed by legal counsel before production use.

## Breaking changes

None.

## Migration steps

None.
