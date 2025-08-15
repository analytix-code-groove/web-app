import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FiDatabase,
  FiGitBranch,
  FiCheckCircle,
  FiLayers,
  FiBarChart2,
  FiPlayCircle,
} from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import StepTimeline from '@/components/StepTimeline'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Data & Analytics Services | AnalytiX',
  description: 'From raw data to real results — faster, smarter, and at scale.',
}

const capabilities = [
  {
    icon: FiDatabase,
    titleKey: 'dataCapabilityWarehousesTitle',
    descKey: 'dataCapabilityWarehousesDesc',
  },
  {
    icon: FiGitBranch,
    titleKey: 'dataCapabilityPipelinesTitle',
    descKey: 'dataCapabilityPipelinesDesc',
  },
  {
    icon: FiCheckCircle,
    titleKey: 'dataCapabilityQualityTitle',
    descKey: 'dataCapabilityQualityDesc',
  },
]

const approachSteps = [
  {
    icon: FiLayers,
    titleKey: 'dataStepBreakDownTitle',
    descKey: 'dataStepBreakDownDesc',
  },
  {
    icon: FiGitBranch,
    titleKey: 'dataStepModernizeTitle',
    descKey: 'dataStepModernizeDesc',
  },
  {
    icon: FiBarChart2,
    titleKey: 'dataStepActivateTitle',
    descKey: 'dataStepActivateDesc',
  },
  {
    icon: FiPlayCircle,
    titleKey: 'dataStepAutomateTitle',
    descKey: 'dataStepAutomateDesc',
  },
]

export default function DataAnalyticsServicePage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {t('dataHeroTitle')}
        </h1>
        <p className="mt-6 text-lg text-muted">{t('dataHeroDesc')}</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
          >
            {t('letsTalk')}
          </Link>
        </div>
      </section>

      {/* Why Foundations */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('dataWhyHeading')}
          </h2>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">
                {t('dataWhyOpsHeading')}
              </span>
              {t('dataWhyOpsText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('dataWhyCostHeading')}
              </span>
              {t('dataWhyCostText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('dataWhyFuelHeading')}
              </span>
              {t('dataWhyFuelText')}
            </li>
          </ul>
        </div>
      </section>

      {/* Core Capabilities with Icons */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('dataCapabilitiesHeading')}
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(c => (
              <CoreCapability
                key={c.titleKey}
                icon={c.icon}
                title={t(c.titleKey)}
                description={t(c.descKey)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('dataApproachHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('dataApproachIntro')}</p>
          <div className="mt-8 text-muted">
            <StepTimeline
              steps={approachSteps.map(s => ({
                icon: s.icon,
                title: t(s.titleKey),
                description: t(s.descKey),
              }))}
            />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('dataOutcomeHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('dataOutcomeIntro')}</p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">
                {t('dataOutcomeFasterHeading')}
              </span>
              {t('dataOutcomeFasterText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('dataOutcomeAgilityHeading')}
              </span>
              {t('dataOutcomeAgilityText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('dataOutcomeCostsHeading')}
              </span>
              {t('dataOutcomeCostsText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('dataOutcomeInnovationHeading')}
              </span>
              {t('dataOutcomeInnovationText')}
            </li>
          </ul>
          <p className="mt-10 text-lg text-text">{t('dataOutcomeFinalLead')}</p>
          <p className="mt-2 text-muted">{t('dataOutcomeFinalBody')}</p>
        </div>
      </section>
    </main>
  )
}
