import type { Metadata } from 'next'
import DataAnalyticsServicePage from './DataAnalyticsClient'

export const metadata: Metadata = {
  title: 'Data & Analytics Services | AnalytiX',
  description: 'From raw data to real results — faster, smarter, and at scale.',
}

export default function Page() {
  return <DataAnalyticsServicePage />
}
