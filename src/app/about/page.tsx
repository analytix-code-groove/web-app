import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Analytix Code Groove — our mission, values, and the team behind the technology.',
}

const BASE = 'https://www.analytixcg.com'

export default function AboutPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'About', url: `${BASE}/about` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AboutClient />
    </>
  )
}
