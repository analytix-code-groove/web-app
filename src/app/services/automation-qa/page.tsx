import type { Metadata } from 'next'
import AutomationQaServicePage from './AutomationQaClient'

export const metadata: Metadata = {
  title: 'Automation & QA Services',
  description: 'Smarter processes. Higher quality. Fewer headaches.',
}

export default function Page() {
  return <AutomationQaServicePage />
}
