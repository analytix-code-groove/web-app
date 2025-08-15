import type { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { getService } from '@/data/services'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Automation & QA Services | AnalytiX',
  description: 'Smarter processes. Higher quality. Fewer headaches.',
}

export default function AutomationQaServicePage() {
  const service = getService('automation-qa')
  if (!service) notFound()
  return <ServiceLayout {...service} />
}
