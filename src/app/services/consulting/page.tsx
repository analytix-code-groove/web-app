import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import ITConsultingServicePage from './ConsultingClient'

export const metadata: Metadata = {
  title: 'IT Consulting',
  description: 'Clarity, architecture, and momentum\u2014when you need it.',
  alternates: { canonical: '/services/consulting' },
}

const BASE = 'https://www.analytixcg.com'

export default function Page() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Services', url: `${BASE}/services` },
    { name: 'IT Consulting', url: `${BASE}/services/consulting` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ITConsultingServicePage />
    </>
  )
}
