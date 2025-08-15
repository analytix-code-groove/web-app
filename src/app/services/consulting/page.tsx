import type { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { getService } from '@/data/services'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'IT Consulting | AnalytiX',
  description: 'Clarity, architecture, and momentum—when you need it.',
}

export default function ITConsultingServicePage() {
  const service = getService('consulting')
  if (!service) notFound()
  return <ServiceLayout {...service} />
}
