'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiCpu, FiZap, FiActivity } from 'react-icons/fi'

export default function AiAutomationPage() {
  const features = [
    {
      icon: FiCpu,
      title: 'LLM Apps',
      description: 'Integrate large language models.',
    },
    {
      icon: FiZap,
      title: 'Automation',
      description: 'Workflow engines and triggers.',
    },
    {
      icon: FiActivity,
      title: 'Monitoring',
      description: 'Observability to keep bots in check.',
    },
  ]

  return (
    <ServiceLayout
      titleKey="aiAutomation"
      descKey="aiAutomationDesc"
      features={features}
    />
  )
}

