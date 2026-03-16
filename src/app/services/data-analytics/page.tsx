import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import { buildServiceJsonLd } from '@/lib/schema'
import DataAnalyticsServicePage from './DataAnalyticsClient'

export const metadata: Metadata = {
  title: 'Data & Analytics Services',
  description: 'From raw data to real results — faster, smarter, and at scale.',
  alternates: { canonical: '/services/data-analytics' },
}

const BASE = 'https://www.analytixcg.com'

export default function Page() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Services', url: `${BASE}/services` },
    { name: 'Data & Analytics', url: `${BASE}/services/data-analytics` },
  ])
  const service = buildServiceJsonLd('data-analytics', 'Data & Analytics', 'Modern data stacks, warehouses, ETL/ELT pipelines, and real-time dashboards.')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <DataAnalyticsServicePage />
    </>
  )
}
