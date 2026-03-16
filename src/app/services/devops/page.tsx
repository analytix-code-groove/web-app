import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import { buildServiceJsonLd } from '@/lib/schema'
import CloudDevOpsServicePage from './DevOpsClient'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services',
  description: 'Build, deploy, and scale with confidence.',
  alternates: { canonical: '/services/devops' },
}

const BASE = 'https://www.analytixcg.com'

export default function Page() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Services', url: `${BASE}/services` },
    { name: 'Cloud & DevOps', url: `${BASE}/services/devops` },
  ])
  const service = buildServiceJsonLd('devops', 'Cloud & DevOps', 'Automated cloud infrastructure, CI/CD pipelines, IaC, and security.')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <CloudDevOpsServicePage />
    </>
  )
}
