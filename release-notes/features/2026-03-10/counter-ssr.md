# Counter SSR Fix

## What was built and why

Fixed the homepage "Why Us?" counters (20+, 5, 7) so crawlers see real numbers in the server-rendered HTML instead of zeros.

- Changed `useCountUp` initial state from `0` to `end` value so SSR output contains real numbers.
- Added a `useEffect` that resets count to `0` after hydration, preserving the scroll-triggered animation for users.
- No hydration mismatch: both server and client initially render `end`; the reset to `0` happens post-hydration.

## Breaking changes

None.

## Migration steps

None.
