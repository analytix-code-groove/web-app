import type { Metadata } from 'next'
import ITConsultingServicePage from './ConsultingClient'

export const metadata: Metadata = {
  title: 'IT Consulting',
  description: 'Clarity, architecture, and momentum—when you need it.',
}

export default function Page() {
  return <ITConsultingServicePage />
}
