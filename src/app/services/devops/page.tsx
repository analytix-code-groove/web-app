'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiCloud, FiRefreshCw, FiLock } from 'react-icons/fi'

export default function CloudDevopsPage() {
  const features = [
    {
      icon: FiCloud,
      title: 'IaC',
      description: 'Provision reproducible environments with Terraform or CloudFormation.',
    },
    {
      icon: FiRefreshCw,
      title: 'CI/CD',
      description: 'Automated testing and deployments for rapid, safe releases.',
    },
    {
      icon: FiLock,
      title: 'Security',
      description: 'Policy-as-code and guardrails baked into every pipeline.',
    },
  ]

  return (
    <ServiceLayout
      titleKey="cloudDevops"
      descKey="cloudDevopsDesc"
      features={features}
      imageSrc="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
    />
  )
}

