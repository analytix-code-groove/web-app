# Release v0.6.0 — Security & Housekeeping

**Date:** 2026-03-23

## Summary

Resolves 17 dependency security vulnerabilities (11 high, 6 moderate) and includes repo rename and documentation updates.

## Included Features

### fix-dependency-vulnerabilities

Upgraded Next.js from 15.4.8 to 15.5.12 and patched transitive dependencies (tar, flatted, minimatch, ajv, js-yaml, mdast-util-to-hast). Eliminates all high-severity CVEs including DoS vectors, source code exposure, path traversal, prototype pollution, and ReDoS. Two moderate Next.js advisories remain (require v16 breaking change).

See: `release-notes/features/fix-dependency-vulnerabilities.md`

## Breaking Changes

None.

## Migration Steps

Run `npm install` to pick up updated dependencies.
