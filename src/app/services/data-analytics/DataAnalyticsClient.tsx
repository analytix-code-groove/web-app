'use client';
import Link from 'next/link'
import { FiDatabase, FiGitBranch, FiCheckCircle, FiLayers, FiBarChart2, FiPlayCircle } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import StepTimeline from '@/components/StepTimeline'
import RelatedServices from '@/components/RelatedServices'
import { useLanguage } from '@/lib/i18n'

export default function DataAnalyticsServicePage() {
  const { t } = useLanguage()

  const capabilities = [
    { icon: FiDatabase, title: t('daCapWarehousesTitle'), description: t('daCapWarehousesDesc') },
    { icon: FiGitBranch, title: t('daCapPipelinesTitle'), description: t('daCapPipelinesDesc') },
    { icon: FiCheckCircle, title: t('daCapQualityTitle'), description: t('daCapQualityDesc') },
  ]

  const approachSteps = [
    { icon: FiLayers, title: t('daStepSilosTitle'), description: t('daStepSilosDesc') },
    { icon: FiGitBranch, title: t('daStepModernizeTitle'), description: t('daStepModernizeDesc') },
    { icon: FiBarChart2, title: t('daStepActivateTitle'), description: t('daStepActivateDesc') },
    { icon: FiPlayCircle, title: t('daStepAutomateTitle'), description: t('daStepAutomateDesc') },
  ]

  const foundations = [
    { bold: t('daFoundation1Bold'), text: t('daFoundation1Text') },
    { bold: t('daFoundation2Bold'), text: t('daFoundation2Text') },
    { bold: t('daFoundation3Bold'), text: t('daFoundation3Text') },
  ]

  const outcomes = [
    { bold: t('daOutcome1Bold'), text: t('daOutcome1Text') },
    { bold: t('daOutcome2Bold'), text: t('daOutcome2Text') },
    { bold: t('daOutcome3Bold'), text: t('daOutcome3Text') },
    { bold: t('daOutcome4Bold'), text: t('daOutcome4Text') },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-bg py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgba(54,226,180,0.09) 0%, rgba(0,0,0,0) 60%)', maskImage: 'radial-gradient(1200px 600px at 50% -10%, black 40%, transparent 70%)' }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background:repeating-linear-gradient(45deg,transparent,transparent_28px,_rgba(255,255,255,0.03)_30px,_rgba(255,255,255,0.03)_32px)]" />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-semibold text-text">
            {t('daHeroTitle')}
          </h1>
          <p className="mt-6 text-lg text-muted">
            {t('daHeroTagline')}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
            >
              {t('daHeroCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Foundations */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('daFoundationsHeading')}
          </h2>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            {foundations.map(f => (
              <li key={f.bold}>
                <span className="font-medium text-text">{f.bold}</span>
                {f.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core Capabilities with Icons */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('daCapabilitiesHeading')}
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(c => (
              <CoreCapability key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('daApproachHeading')}
          </h2>
          <p className="mt-4 text-muted">
            {t('daApproachSubtitle')}
          </p>
          <div className="mt-8 text-muted">
            <StepTimeline steps={approachSteps} />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('daOutcomesHeading')}
          </h2>
          <p className="mt-4 text-muted">
            {t('daOutcomesSubtitle')}
          </p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            {outcomes.map(o => (
              <li key={o.bold}>
                <span className="font-medium text-text">{o.bold}</span>
                {o.text}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg text-text">
            {t('daOutcomesClosing')}
          </p>
          <p className="mt-2 text-muted">
            {t('daOutcomesClosingSub')}
          </p>
        </div>
      </section>

      <RelatedServices currentSlug="data-analytics" />
    </main>
  )
}
