import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import DataAnalyticsServicePage from './DataAnalyticsClient'

export const metadata: Metadata = {
  title: 'Data & Analytics Services',
  description: 'From raw data to real results — faster, smarter, and at scale.',
}

const BASE = 'https://www.analytixcg.com'

export default function Page() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Services', url: `${BASE}/services` },
    { name: 'Data & Analytics', url: `${BASE}/services/data-analytics` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <DataAnalyticsServicePage />
    </>
  )
}
