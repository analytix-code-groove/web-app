import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <StaffAugmentationClient />
    </>
  )
}
