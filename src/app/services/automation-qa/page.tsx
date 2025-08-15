import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FiRefreshCw,
  FiCheckCircle,
  FiShield,
  FiTarget,
  FiPenTool,
  FiBox,
  FiBarChart,
} from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import StepTimeline from '@/components/StepTimeline'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Automation & QA Services | AnalytiX',
  description:
    'Smarter processes. Higher quality. Fewer headaches.',
}

const capabilities = [
  {
    icon: FiRefreshCw,
    titleKey: 'autoCapWorkflowTitle',
    descKey: 'autoCapWorkflowDesc',
  },
  {
    icon: FiCheckCircle,
    titleKey: 'autoCapTestingTitle',
    descKey: 'autoCapTestingDesc',
  },
  {
    icon: FiShield,
    titleKey: 'autoCapQualityTitle',
    descKey: 'autoCapQualityDesc',
  },
]

const journeySteps = [
  {
    icon: FiTarget,
    titleKey: 'autoStepTargetTitle',
    descKey: 'autoStepTargetDesc',
  },
  {
    icon: FiPenTool,
    titleKey: 'autoStepDesignTitle',
    descKey: 'autoStepDesignDesc',
  },
  {
    icon: FiBox,
    titleKey: 'autoStepBuildTitle',
    descKey: 'autoStepBuildDesc',
  },
  {
    icon: FiShield,
    titleKey: 'autoStepHardenTitle',
    descKey: 'autoStepHardenDesc',
  },
  {
    icon: FiBarChart,
    titleKey: 'autoStepMeasureTitle',
    descKey: 'autoStepMeasureDesc',
  },
]

export default function AutomationQaServicePage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {t('autoHeroTitle')}
        </h1>
        <p className="mt-6 text-lg text-muted">{t('autoHeroDesc')}</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
          >
            {t('letsTalk')}
          </Link>
        </div>
      </section>

      {/* Why Automation & QA */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('autoWhyHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('autoWhyText')}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('autoApproachHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('autoApproachText1')}</p>
          <p className="mt-4 text-muted">{t('autoApproachText2')}</p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">{t('autoCapabilitiesHeading')}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Implementation Journey */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">{t('autoJourneyHeading')}</h2>
          <div className="mt-8 text-muted">
            <StepTimeline
              steps={journeySteps.map(s => ({
                icon: s.icon,
                title: t(s.titleKey),
                description: t(s.descKey),
              }))}
            />
          </div>
        </div>
      </section>

      {/* Engage the Future */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">{t('autoFutureHeading')}</h2>
          <p className="mt-4 text-muted">{t('autoFutureIntro')}</p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">
                {t('autoFutureEliminateHeading')}
              </span>
              {t('autoFutureEliminateText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('autoFutureReleaseHeading')}
              </span>
              {t('autoFutureReleaseText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('autoFutureReliabilityHeading')}
              </span>
              {t('autoFutureReliabilityText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('autoFutureRiskHeading')}
              </span>
              {t('autoFutureRiskText')}
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

