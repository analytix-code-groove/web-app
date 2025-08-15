'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiDatabase, FiGitBranch, FiCheckCircle } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import pic1 from '@/images/services/data_engineering.jpg'

type Feature = { icon: IconType; title: string; description: string }

export default function DataEngineeringPage() {
  const features: ReadonlyArray<Feature> = [
    {
      icon: FiDatabase,
      title: 'Warehouses & Lakes',
      description:
        'Design and implement scalable data warehouses and lakes on any major platform — AWS, Azure, GCP, or on-prem — optimized for performance, governance, and analytics readiness.',
    },
    {
      icon: FiGitBranch,
      title: 'Pipelines & Integration',
      description:
        'Build robust ETL/ELT pipelines using tools like Airflow, dbt, or native cloud orchestrators. We handle batch and streaming data, API integrations, and event-driven ingestion at any scale.',
    },
    {
      icon: FiCheckCircle,
      title: 'Quality & Reliability',
      description:
        'Implement validation, monitoring, and lineage tracking so your data remains accurate, trustworthy, and compliant. We ensure every dataset meets your defined SLOs.',
    },
  ]

  return (
    <ServiceLayout
      titleKey="dataEngineering"
      // if you keep descKey for i18n:
      // descKey="dataEngineeringDesc"
      // if you want direct text:
      descKey="dataEngineeringDesc" // this should map to a translation containing your full description
      features={features}
      imageSrc={pic1}
      imageAlt="Data engineering service illustration"
    />
  )
}
