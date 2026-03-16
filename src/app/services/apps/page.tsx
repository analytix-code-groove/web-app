import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import { buildServiceJsonLd } from '@/lib/schema'
import AppsServicePage from './AppsClient'

export const metadata: Metadata = {
  title: 'Apps & APIs Services',
  description: 'From prototype to production — applications and integrations that scale with your business.',
  alternates: { canonical: '/services/apps' },
}

const BASE = 'https://www.analytixcg.com'

export default function Page() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Services', url: `${BASE}/services` },
    { name: 'Apps & APIs', url: `${BASE}/services/apps` },
  ])
  const service = buildServiceJsonLd('apps', 'Apps & APIs', 'Scalable web/mobile applications with clean, documented APIs.')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <AppsServicePage />
    </>
  )
}
