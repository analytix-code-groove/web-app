import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FiSearch,
  FiShield,
  FiCheckCircle,
  FiBox,
  FiPlayCircle,
  FiRefreshCw,
  FiTrendingUp,
} from 'react-icons/fi'
import StepTimeline from '@/components/StepTimeline'
import CoreCapability from '@/components/CoreCapability'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Generative AI Services | AnalytiX',
  description: 'Where automation meets creativity to solve real-world challenges.',
}

const useCases = [
  {
    icon: FiSearch,
    titleKey: 'aiUseCaseDocTitle',
    descKey: 'aiUseCaseDocDesc',
  },
  {
    icon: FiShield,
    titleKey: 'aiUseCaseCodeTitle',
    descKey: 'aiUseCaseCodeDesc',
  },
]

const journeySteps = [
  {
    icon: FiSearch,
    titleKey: 'aiStepIdentifyTitle',
    descKey: 'aiStepIdentifyDesc',
  },
  {
    icon: FiCheckCircle,
    titleKey: 'aiStepAssessTitle',
    descKey: 'aiStepAssessDesc',
  },
  {
    icon: FiBox,
    titleKey: 'aiStepValidateTitle',
    descKey: 'aiStepValidateDesc',
  },
  {
    icon: FiPlayCircle,
    titleKey: 'aiStepBuildTitle',
    descKey: 'aiStepBuildDesc',
  },
  {
    icon: FiTrendingUp,
    titleKey: 'aiStepOptimizeTitle',
    descKey: 'aiStepOptimizeDesc',
  },
  {
    icon: FiRefreshCw,
    titleKey: 'aiStepEvolveTitle',
    descKey: 'aiStepEvolveDesc',
  },
]

export default function GenerativeAIServicePage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {t('aiHeroTitle')}
        </h1>
        <p className="mt-6 text-lg text-muted">{t('aiHeroDesc')}</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
          >
            {t('letsTalk')}
          </Link>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('aiUseCasesHeading')}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {useCases.map(c => (
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

      {/* Why Generative AI */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('aiWhyHeading')}
          </h2>
          <p className="mt-8 text-muted">{t('aiWhyText')}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('aiApproachHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('aiApproachText')}</p>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('aiJourneyHeading')}
          </h2>
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

      {/* Future of Work */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('aiFutureHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('aiFutureIntro')}</p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">
                {t('aiFutureFreeHeading')}
              </span>
              {t('aiFutureFreeText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('aiFutureAskHeading')}
              </span>
              {t('aiFutureAskText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('aiFutureChaosHeading')}
              </span>
              {t('aiFutureChaosText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('aiFutureInnovateHeading')}
              </span>
              {t('aiFutureInnovateText')}
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

