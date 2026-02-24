import type { Metadata } from 'next'
import AppsServicePage from './AppsClient'

export const metadata: Metadata = {
  title: 'Apps & APIs Services',
  description: 'From prototype to production — applications and integrations that scale with your business.',
}

export default function Page() {
  return <AppsServicePage />
}
