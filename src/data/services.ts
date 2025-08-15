import type { StaticImageData } from 'next/image'

export type Feature = {
  icon: string
  titleKey: string
  descKey: string
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
    imageAlt: 'Data & Analytics service illustration',
    features: [
      {
        icon: 'FiDatabase',
        titleKey: 'warehousesLakesTitle',
        descKey: 'warehousesLakesDesc',
      },
      {
        icon: 'FiGitBranch',
        titleKey: 'pipelinesIntegrationTitle',
        descKey: 'pipelinesIntegrationDesc',
      },
      {
        icon: 'FiCheckCircle',
        titleKey: 'qualityReliabilityTitle',
        descKey: 'qualityReliabilityDesc',
      },
      {
        icon: 'FiPieChart',
        titleKey: 'dashboardsTitle',
        descKey: 'dashboardsDesc',
      },
      {
        icon: 'FiBarChart',
        titleKey: 'visualizationTitle',
        descKey: 'visualizationDesc',
      },
      {
        icon: 'FiTrendingUp',
        titleKey: 'insightsTitle',
        descKey: 'insightsDesc',
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
        titleKey: 'aiLlmAppsTitle',
        descKey: 'aiLlmAppsDesc',
      },
      {
        icon: 'FiZap',
        titleKey: 'aiAutomationFeatTitle',
        descKey: 'aiAutomationFeatDesc',
      },
      {
        icon: 'FiActivity',
        titleKey: 'aiMonitoringTitle',
        descKey: 'aiMonitoringDesc',
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
        titleKey: 'appsFrontendsTitle',
        descKey: 'appsFrontendsDesc',
      },
      {
        icon: 'FiCode',
        titleKey: 'appsApisTitle',
        descKey: 'appsApisDesc',
      },
      {
        icon: 'FiActivity',
        titleKey: 'appsOperationsTitle',
        descKey: 'appsOperationsDesc',
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
        titleKey: 'autoWorkflowTitle',
        descKey: 'autoWorkflowDesc',
      },
      {
        icon: 'FiCheckSquare',
        titleKey: 'autoTestingTitle',
        descKey: 'autoTestingDesc',
      },
      {
        icon: 'FiShield',
        titleKey: 'autoQualityTitle',
        descKey: 'autoQualityDesc',
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
        titleKey: 'devopsIacTitle',
        descKey: 'devopsIacDesc',
      },
      {
        icon: 'FiRefreshCw',
        titleKey: 'devopsCicdTitle',
        descKey: 'devopsCicdDesc',
      },
      {
        icon: 'FiLock',
        titleKey: 'devopsSecurityTitle',
        descKey: 'devopsSecurityDesc',
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
        titleKey: 'consultingStrategyTitle',
        descKey: 'consultingStrategyDesc',
      },
      {
        icon: 'FiLayers',
        titleKey: 'consultingArchitectureTitle',
        descKey: 'consultingArchitectureDesc',
      },
      {
        icon: 'FiCompass',
        titleKey: 'consultingRoadmapsTitle',
        descKey: 'consultingRoadmapsDesc',
      },
    ],
  }
]

export function getService(slug: string) {
  return services.find(s => s.slug === slug)
}

