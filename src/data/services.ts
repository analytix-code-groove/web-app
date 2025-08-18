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
  cardIcons?: ReadonlyArray<string>
}

export const services: ReadonlyArray<Service> = [
  {
    slug: 'data-analytics',
    titleKey: 'dataAnalytics',
    descKey: 'dataAnalyticsDesc',
    cardBlurbKey: 'dataAnalyticsCard',
    imageAlt: 'Data & Analytics service illustration',
    cardIcons: ['FiDatabase', 'FiPieChart', 'FiBarChart'],
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
    cardIcons: ['FiCpu', 'FiZap', 'FiActivity'],
    features: [
      {
        icon: 'FiCpu',
        titleKey: 'llmAppsTitle',
        descKey: 'llmAppsDesc',
      },
      {
        icon: 'FiZap',
        titleKey: 'aiAutomationFeatureTitle',
        descKey: 'aiAutomationFeatureDesc',
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
    cardIcons: ['FiSmartphone', 'FiCode', 'FiActivity'],
    features: [
      {
        icon: 'FiSmartphone',
        titleKey: 'frontendsTitle',
        descKey: 'frontendsDesc',
      },
      {
        icon: 'FiCode',
        titleKey: 'apisTitle',
        descKey: 'apisDesc',
      },
      {
        icon: 'FiActivity',
        titleKey: 'operationsTitle',
        descKey: 'operationsDesc',
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
    cardIcons: ['FiSettings', 'FiCheckSquare', 'FiShield'],
    features: [
      {
        icon: 'FiSettings',
        titleKey: 'workflowAutomationTitle',
        descKey: 'workflowAutomationDesc',
      },
      {
        icon: 'FiCheckSquare',
        titleKey: 'testAutomationTitle',
        descKey: 'testAutomationDesc',
      },
      {
        icon: 'FiShield',
        titleKey: 'qualityGatesTitle',
        descKey: 'qualityGatesDesc',
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
    cardIcons: ['FiCloud', 'FiRefreshCw', 'FiLock'],
    features: [
      {
        icon: 'FiCloud',
        titleKey: 'iacTitle',
        descKey: 'iacDesc',
      },
      {
        icon: 'FiRefreshCw',
        titleKey: 'cicdTitle',
        descKey: 'cicdDesc',
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
    cardIcons: ['FiMap', 'FiLayers', 'FiCompass'],
    features: [
      {
        icon: 'FiMap',
        titleKey: 'strategyTitle',
        descKey: 'strategyDesc',
      },
      {
        icon: 'FiLayers',
        titleKey: 'architectureTitle',
        descKey: 'architectureDesc',
      },
      {
        icon: 'FiCompass',
        titleKey: 'roadmapsTitle',
        descKey: 'roadmapsDesc',
      },
    ],
  }
]

export function getService(slug: string) {
  return services.find(s => s.slug === slug)
}

