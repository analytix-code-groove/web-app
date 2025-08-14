'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiDatabase, FiGitBranch, FiCheckCircle } from 'react-icons/fi'

export default function DataEngineeringPage() {
  const features = [
    {
      icon: FiDatabase,
      title: 'Warehouses',
      description: 'Streamlined storage for analytics-ready data.',
    },
    {
      icon: FiGitBranch,
      title: 'Pipelines',
      description: 'Automated ETL and scheduling.',
    },
    {
      icon: FiCheckCircle,
      title: 'Quality',
      description: 'Monitoring and tests for trustworthy data.',
    },
  ]

  return (
    <ServiceLayout
      titleKey="dataEngineering"
      descKey="dataEngineeringDesc"
      features={features}
    />
  )
}

