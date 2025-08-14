'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiDatabase, FiGitBranch, FiCheckCircle } from 'react-icons/fi'

export default function DataEngineeringPage() {
  const features = [
    {
      icon: FiDatabase,
      title: 'Warehouses',
      description: 'Scalable warehouses and lakes tuned for your analytics.',
    },
    {
      icon: FiGitBranch,
      title: 'Pipelines',
      description: 'Event-driven ETL/ELT orchestrated with modern tooling.',
    },
    {
      icon: FiCheckCircle,
      title: 'Quality',
      description: 'Validation, lineage, and monitoring to keep data reliable.',
    },
  ]

  return (
    <ServiceLayout
      titleKey="dataEngineering"
      descKey="dataEngineeringDesc"
      features={features}
      imageSrc="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80"
    />
  )
}

