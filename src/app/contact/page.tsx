import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import { ContactClient } from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Analytix team to discuss your next project.',
  alternates: { canonical: '/contact' },
}

const BASE = 'https://www.analytixcg.com'

export default function ContactPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Contact', url: `${BASE}/contact` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ContactClient />
    </>
  )
}
