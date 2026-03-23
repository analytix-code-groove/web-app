# Fix Dependency Vulnerabilities

## What was built and why

Resolved 17 of 19 Dependabot security alerts by upgrading vulnerable dependencies. The most critical fix is Next.js 15.4.8 → 15.5.12, which patches DoS vectors, source code exposure, and HTTP request smuggling in production.

### Packages updated

| Package | From | To | CVEs Fixed | Severity |
|---|---|---|---|---|
| next | 15.4.8 | 15.5.12 | 6 | High + Medium |
| tar | 7.4.3 | patched | 5 | High |
| flatted | 3.3.3 | patched | 2 | High |
| minimatch | 3.1.2 | patched | 6 | High |
| ajv | old | 6.14.0+ | 1 | Moderate |
| js-yaml | 4.0.x | 4.1.1+ | 1 | Moderate |
| mdast-util-to-hast | 13.0.x | 13.2.1+ | 1 | Moderate |

### Remaining (2 moderate, Next.js 16 only)

- HTTP request smuggling in rewrites — requires Next.js 16 (breaking change)
- Unbounded next/image disk cache growth — requires Next.js 16 (breaking change)

## Breaking changes

None. Next.js stays on v15 (minor bump only). All other updates are patch-level transitive dependency fixes.

## Migration steps

None required. Run `npm install` to pick up the updated `package-lock.json`.
