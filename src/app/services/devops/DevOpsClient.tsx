'use client';
import Link from 'next/link'
import { FiSearch, FiShield, FiRefreshCw, FiCodesandbox, FiServer, FiUsers } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import RelatedServices from '@/components/RelatedServices'
import { useLanguage } from '@/lib/i18n'

export default function CloudDevOpsServicePage() {
  const { t } = useLanguage()

  const capabilities = [
    {
      icon: FiSearch,
      title: t('devopsCapAssessTitle'),
      description: t('devopsCapAssessDesc'),
    },
    {
      icon: FiShield,
      title: t('devopsCapScaleTitle'),
      description: t('devopsCapScaleDesc'),
    },
    {
      icon: FiRefreshCw,
      title: t('devopsCapAutomateTitle'),
      description: t('devopsCapAutomateDesc'),
    },
    {
      icon: FiCodesandbox,
      title: t('devopsCapIacTitle'),
      description: t('devopsCapIacDesc'),
    },
    {
      icon: FiServer,
      title: t('devopsCapOptimizeTitle'),
      description: t('devopsCapOptimizeDesc'),
    },
    {
      icon: FiUsers,
      title: t('devopsCapCultureTitle'),
      description: t('devopsCapCultureDesc'),
    },
  ]

  const outcomes = [
    { bold: t('devopsOutcome1Bold'), text: t('devopsOutcome1Text') },
    { bold: t('devopsOutcome2Bold'), text: t('devopsOutcome2Text') },
    { bold: t('devopsOutcome3Bold'), text: t('devopsOutcome3Text') },
    { bold: t('devopsOutcome4Bold'), text: t('devopsOutcome4Text') },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-bg py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgba(54,226,180,0.09) 0%, rgba(0,0,0,0) 60%)', maskImage: 'radial-gradient(1200px 600px at 50% -10%, black 40%, transparent 70%)' }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background:repeating-linear-gradient(45deg,transparent,transparent_28px,_rgba(255,255,255,0.03)_30px,_rgba(255,255,255,0.03)_32px)]" />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-semibold text-text">
            {t('devopsHeroTitle')}
          </h1>
          <p className="mt-6 text-lg text-muted">
            {t('devopsHeroTagline')}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
            >
              {t('devopsHeroCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Cloud & DevOps */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('devopsWhyHeading')}
          </h2>
          <p className="mt-8 text-muted">
            {t('devopsWhyP1')}
          </p>
          <p className="mt-4 text-muted">
            {t('devopsWhyP2')}
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('devopsApproachHeading')}
          </h2>
          <p className="mt-4 text-muted">
            {t('devopsApproachP1')}
          </p>
          <p className="mt-4 text-muted">
            {t('devopsApproachP2')}
          </p>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('devopsDeliverHeading')}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(c => (
              <CoreCapability key={c.title} {...c} />
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
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('devopsOutcomesHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('devopsOutcomesSubtitle')}</p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            {outcomes.map(o => (
              <li key={o.bold}>
                <span className="font-medium text-text">{o.bold}</span>
                {o.text}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <RelatedServices currentSlug="devops" />
    </main>
  )
}
