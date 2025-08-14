'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiSmartphone, FiCode, FiActivity } from 'react-icons/fi'

export default function AppsApisPage() {
  const features = [
    {
      icon: FiSmartphone,
      title: 'Frontends',
      description: 'Mobile-first, accessible UIs.',
    },
    {
      icon: FiCode,
      title: 'APIs',
      description: 'Typed, versioned endpoints.',
    },
    {
      icon: FiActivity,
      title: 'Operations',
      description: 'Monitoring and telemetry.',
    },
  ]

  return (
    <ServiceLayout
      titleKey="appsApis"
      descKey="appsApisDesc"
      features={features}
    />
  )
}

