'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiSmartphone, FiCode, FiActivity } from 'react-icons/fi'

export default function AppsApisPage() {
  const features = [
    {
      icon: FiSmartphone,
      title: 'Frontends',
      description: 'Responsive interfaces built with modern frameworks.',
    },
    {
      icon: FiCode,
      title: 'APIs',
      description: 'Secure, documented endpoints for internal or public use.',
    },
    {
      icon: FiActivity,
      title: 'Operations',
      description: 'Observability and SRE practices to keep services healthy.',
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

