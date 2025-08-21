// next.config.ts
import type { NextConfig } from 'next'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

let localUrl = ''
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  localUrl = require('./supabase.local.json')?.SUPABASE_URL ?? ''
} catch {}

const supabaseUrl =
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || localUrl
const supabaseHost = supabaseUrl ? new URL(supabaseUrl).hostname : ''

console.log('[next/image] allow host:', supabaseHost)

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: supabaseHost, pathname: '/storage/v1/object/**' },
    ],
  },
  async rewrites() {
    return [{ source: '/rss.xml', destination: '/api/rss.xml' }]
  },
}

export default nextConfig
