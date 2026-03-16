import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import { buildServiceJsonLd } from '@/lib/schema'
import AutomationQaServicePage from './AutomationQaClient'

export const metadata: Metadata = {
  title: 'Automation & QA Services',
  description: 'Smarter processes. Higher quality. Fewer headaches.',
  alternates: { canonical: '/services/automation-qa' },
}

const BASE = 'https://www.analytixcg.com'

export default function Page() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Services', url: `${BASE}/services` },
    { name: 'Automation & QA', url: `${BASE}/services/automation-qa` },
  ])
  const service = buildServiceJsonLd('automation-qa', 'Automation & QA', 'Workflow automation, test automation, and quality gates.')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <AutomationQaServicePage />
    </>
  )
}
