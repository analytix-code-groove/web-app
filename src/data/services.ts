import type { StaticImageData } from 'next/image'
import pic1 from '@/images/services/data_engineering.jpg'

export type Feature = {
  icon: string
  title: string
  description: string
}

export type Service = {
  slug: string
  titleKey: string
  descKey: string
  cardBlurbKey: string
  features: ReadonlyArray<Feature>
  imageSrc?: string | StaticImageData
  imageAlt?: string
}

export const services: ReadonlyArray<Service> = [
  {
    slug: 'data-analytics',
    titleKey: 'dataAnalytics',
    descKey: 'dataAnalyticsDesc',
    cardBlurbKey: 'dataAnalyticsCard',
    imageSrc: pic1,
    imageAlt: 'Data & Analytics service illustration',
    features: [
      {
        icon: 'FiDatabase',
        title: 'Warehouses & Lakes',
        description:
          'Design and implement scalable data warehouses and lakes on any major platform — AWS, Azure, GCP, or on-prem — optimized for performance, governance, and analytics readiness.',
      },
      {
        icon: 'FiGitBranch',
        title: 'Pipelines & Integration',
        description:
          'Build robust ETL/ELT pipelines using tools like Airflow, dbt, or native cloud orchestrators. We handle batch and streaming data, API integrations, and event-driven ingestion at any scale.',
      },
      {
        icon: 'FiCheckCircle',
        title: 'Quality & Reliability',
        description:
          'Implement validation, monitoring, and lineage tracking so your data remains accurate, trustworthy, and compliant. We ensure every dataset meets your defined SLOs.',
      },
      {
        icon: 'FiPieChart',
        title: 'Dashboards',
        description: 'Real-time dashboards for operations and KPIs.',
      },
      {
        icon: 'FiBarChart',
        title: 'Visualization',
        description: 'Custom charts that surface trends and anomalies.',
      },
      {
        icon: 'FiTrendingUp',
        title: 'Insights',
        description: 'Guidance to turn metrics into decisive action.',
      },
    ],
  },
  {
    slug: 'ai',
    titleKey: 'aiAutomation',
    descKey: 'aiAutomationDesc',
    cardBlurbKey: 'aiAutomationCard',
    imageSrc:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    features: [
      {
        icon: 'FiCpu',
        title: 'LLM Apps',
        description: 'Chatbots and copilots that accelerate your teams.',
      },
      {
        icon: 'FiZap',
        title: 'Automation',
        description: 'Event-driven workflows that eliminate busywork.',
      },
      {
        icon: 'FiActivity',
        title: 'Monitoring',
        description: 'Track drift and performance to keep automation on target.',
      },
    ],
  },
  {
    slug: 'apps',
    titleKey: 'appsApis',
    descKey: 'appsApisDesc',
    cardBlurbKey: 'appsApisCard',
    imageSrc:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80',
    features: [
      {
        icon: 'FiSmartphone',
        title: 'Frontends',
        description: 'Responsive interfaces built with modern frameworks.',
      },
      {
        icon: 'FiCode',
        title: 'APIs',
        description: 'Secure, documented endpoints for internal or public use.',
      },
      {
        icon: 'FiActivity',
        title: 'Operations',
        description: 'Observability and SRE practices to keep services healthy.',
      },
    ],
  },
  {
    slug: 'automation-qa',
    titleKey: 'automationQa',
    descKey: 'automationQaDesc',
    cardBlurbKey: 'automationQaCard',
    imageSrc:
      'https://images.unsplash.com/photo-1581090700227-4f9a6d3a3c0a?auto=format&fit=crop&w=800&q=80',
    features: [
      {
        icon: 'FiSettings',
        title: 'Workflow Automation',
        description:
          'Eliminate manual steps with tailored scripts and bots.',
      },
      {
        icon: 'FiCheckSquare',
        title: 'Test Automation',
        description:
          'Unit, integration, and end-to-end suites that catch regressions.',
      },
      {
        icon: 'FiShield',
        title: 'Quality Gates',
        description:
          'Policy checks and approvals baked into your pipelines.',
      },
    ],
  },
  {
    slug: 'devops',
    titleKey: 'cloudDevops',
    descKey: 'cloudDevopsDesc',
    cardBlurbKey: 'cloudDevopsCard',
    imageSrc:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    features: [
      {
        icon: 'FiCloud',
        title: 'IaC',
        description:
          'Provision reproducible environments with Terraform or CloudFormation.',
      },
      {
        icon: 'FiRefreshCw',
        title: 'CI/CD',
        description:
          'Automated testing and deployments for rapid, safe releases.',
      },
      {
        icon: 'FiLock',
        title: 'Security',
        description: 'Policy-as-code and guardrails baked into every pipeline.',
      },
    ],
  },
  {
    slug: 'consulting',
    titleKey: 'itConsulting',
    descKey: 'itConsultingDesc',
    cardBlurbKey: 'itConsultingCard',
    imageSrc:
      'https://images.unsplash.com/photo-1551836022-02eeb4e36dd0?auto=format&fit=crop&w=800&q=80',
    features: [
      {
        icon: 'FiMap',
        title: 'Strategy',
        description: 'Assess your landscape to uncover opportunities and risks.',
      },
      {
        icon: 'FiLayers',
        title: 'Architecture',
        description: 'Blueprint resilient, scalable systems aligned to goals.',
      },
      {
        icon: 'FiCompass',
        title: 'Roadmaps',
        description: 'Prioritized technology paths that keep teams aligned.',
      },
    ],
  }
]

export function getService(slug: string) {
  return services.find(s => s.slug === slug)
}

