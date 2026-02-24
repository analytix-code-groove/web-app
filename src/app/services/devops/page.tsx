import type { Metadata } from 'next'
import CloudDevOpsServicePage from './DevOpsClient'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services',
  description: 'Build, deploy, and scale with confidence.',
}

export default function Page() {
  return <CloudDevOpsServicePage />
}
