import type { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { getService } from '@/data/services'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Generative AI Services | AnalytiX',
  description: 'Where automation meets creativity to solve real-world challenges.',
}

export default function GenerativeAIServicePage() {
  const service = getService('ai')
  if (!service) notFound()
  return <ServiceLayout {...service} />
}
