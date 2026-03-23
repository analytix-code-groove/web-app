# Hero Video Poster

## What was built and why

Added a poster image and preload hint to the Hero video background to eliminate the blank screen delay on page load. Previously, users saw an empty dark section until the 33MB video finished buffering.

### Changes

- Extracted a first-frame JPEG poster (158KB, 1920x1080) from `hero-bg.mp4`
- Added `poster="/videos/hero-bg-poster.jpg"` to the `<video>` element
- Added `preload="auto"` to start fetching the video immediately

## Breaking changes

None.

## Migration steps

None required.
