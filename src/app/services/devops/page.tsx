'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiCloud, FiRefreshCw, FiLock } from 'react-icons/fi'

export default function CloudDevopsPage() {
  const features = [
    {
      icon: FiCloud,
      title: 'IaC',
      description: 'Provision reproducible environments.',
    },
    {
      icon: FiRefreshCw,
      title: 'CI/CD',
      description: 'Ship code with automated pipelines.',
    },
    {
      icon: FiLock,
      title: 'Security',
      description: 'Built-in policies and guardrails.',
    },
  ]

  return (
    <ServiceLayout
      titleKey="cloudDevops"
      descKey="cloudDevopsDesc"
      features={features}
    />
  )
}

