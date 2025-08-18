import type { Metadata } from 'next'
import CloudDevOpsServicePage from './DevOpsClient'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services | Analytix Code Groove',
  description: 'Build, deploy, and scale with confidence.',
}

export default function Page() {
  return <CloudDevOpsServicePage />
}
