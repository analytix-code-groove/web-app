import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import { buildServiceJsonLd } from '@/lib/schema'
import StaffAugmentationClient from './StaffAugmentationClient'

export const metadata: Metadata = {
  title: 'Staff Augmentation',
  description: 'Senior engineers who integrate into your team \u2014 on your terms, at your pace.',
  alternates: { canonical: '/services/staff-augmentation' },
}

const BASE = 'https://www.analytixcg.com'

export default function Page() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Services', url: `${BASE}/services` },
    { name: 'Staff Augmentation', url: `${BASE}/services/staff-augmentation` },
  ])
  const service = buildServiceJsonLd('staff-augmentation', 'Staff Augmentation', 'Embedded senior engineers integrated into your team.')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <StaffAugmentationClient />
    </>
  )
}
