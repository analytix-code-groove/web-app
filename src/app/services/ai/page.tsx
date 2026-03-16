import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import { buildServiceJsonLd } from '@/lib/schema'
import GenerativeAIServicePage from './GenerativeAIClient'

export const metadata: Metadata = {
  title: 'Generative AI Services',
  description: 'Where automation meets creativity to solve real-world challenges.',
  alternates: { canonical: '/services/ai' },
}

const BASE = 'https://www.analytixcg.com'

export default function Page() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Services', url: `${BASE}/services` },
    { name: 'Generative AI', url: `${BASE}/services/ai` },
  ])
  const service = buildServiceJsonLd('ai', 'Generative AI', 'LLM agents, workflow automation, document summarization, and secure code generation.')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <GenerativeAIServicePage />
    </>
  )
}
