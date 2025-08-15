import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FiSearch,
  FiShield,
  FiRefreshCw,
  FiCodesandbox,
  FiServer,
  FiUsers,
} from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services | AnalytiX',
  description: 'Build, deploy, and scale with confidence.',
}

const howDeliver = [
  {
    icon: FiSearch,
    titleKey: 'devDeliverAssessTitle',
    descKey: 'devDeliverAssessDesc',
  },
  {
    icon: FiShield,
    titleKey: 'devDeliverDesignTitle',
    descKey: 'devDeliverDesignDesc',
  },
  {
    icon: FiRefreshCw,
    titleKey: 'devDeliverAutomateTitle',
    descKey: 'devDeliverAutomateDesc',
  },
  {
    icon: FiCodesandbox,
    titleKey: 'devDeliverIacTitle',
    descKey: 'devDeliverIacDesc',
  },
  {
    icon: FiServer,
    titleKey: 'devDeliverOptimizeTitle',
    descKey: 'devDeliverOptimizeDesc',
  },
  {
    icon: FiUsers,
    titleKey: 'devDeliverCultureTitle',
    descKey: 'devDeliverCultureDesc',
  },
]

export default function CloudDevOpsServicePage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {t('devHeroTitle')}
        </h1>
        <p className="mt-6 text-lg text-muted">{t('devHeroDesc')}</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
          >
            {t('letsTalk')}
          </Link>
        </div>
      </section>

      {/* Why Cloud & DevOps */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('devWhyHeading')}
          </h2>
          <p className="mt-8 text-muted">{t('devWhyText1')}</p>
          <p className="mt-4 text-muted">{t('devWhyText2')}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('devApproachHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('devApproachText1')}</p>
          <p className="mt-4 text-muted">{t('devApproachText2')}</p>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('devDeliverHeading')}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {howDeliver.map(c => (
              <CoreCapability
                key={c.titleKey}
                icon={c.icon}
                title={t(c.titleKey)}
                description={t(c.descKey)}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <svg
              className="h-32 w-48 text-stroke"
              viewBox="0 0 200 100"
              fill="none"
              stroke="currentColor"
            >
              <rect x="10" y="40" width="60" height="20" rx="4" />
              <rect x="130" y="40" width="60" height="20" rx="4" />
              <path d="M70 50H130" />
            </svg>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">{t('devOutcomesHeading')}</h2>
          <p className="mt-4 text-muted">{t('devOutcomesIntro')}</p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">
                {t('devOutcomeReleaseHeading')}
              </span>
              {t('devOutcomeReleaseText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('devOutcomeReliabilityHeading')}
              </span>
              {t('devOutcomeReliabilityText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('devOutcomeCostHeading')}
              </span>
              {t('devOutcomeCostText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('devOutcomeAgilityHeading')}
              </span>
              {t('devOutcomeAgilityText')}
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

