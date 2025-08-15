import type { Metadata } from 'next'
import ServiceCards from '@/components/ServiceCards'

export const metadata: Metadata = {
  title: 'Services | AnalytiX',
  description: 'Explore the range of technology services offered by AnalytiX.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">Services</h1>
      </div>
      <ServiceCards />
    </main>
  )
}
