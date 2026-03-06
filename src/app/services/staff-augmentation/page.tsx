import type { Metadata } from 'next'
import StaffAugmentationClient from './StaffAugmentationClient'

export const metadata: Metadata = {
  title: 'Staff Augmentation',
  description: 'Senior engineers who integrate into your team — on your terms, at your pace.',
}

export default function Page() {
  return <StaffAugmentationClient />
}
