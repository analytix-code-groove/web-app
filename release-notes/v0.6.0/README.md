# Release v0.6.0 — Security, Performance & Housekeeping

**Date:** 2026-03-23

## Summary

Resolves 17 dependency security vulnerabilities (11 high, 6 moderate), eliminates the hero video loading delay, and includes repo rename and documentation updates.

## Included Features

### fix-dependency-vulnerabilities

Upgraded Next.js from 15.4.8 to 15.5.12 and patched transitive dependencies (tar, flatted, minimatch, ajv, js-yaml, mdast-util-to-hast). Eliminates all high-severity CVEs including DoS vectors, source code exposure, path traversal, prototype pollution, and ReDoS. Two moderate Next.js advisories remain (require v16 breaking change).

See: `release-notes/features/2026-03-23/fix-dependency-vulnerabilities.md`

### hero-video-poster

Added a 158KB poster image to the hero video background so users see content instantly on page load instead of a blank screen while the 33MB video buffers. Also added `preload="auto"` to start fetching the video sooner.

See: `release-notes/features/2026-03-23/hero-video-poster.md`

## Breaking Changes

None.

## Migration Steps

Run `npm install` to pick up updated dependencies.
