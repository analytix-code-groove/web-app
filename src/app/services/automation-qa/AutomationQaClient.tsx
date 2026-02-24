'use client';
import Link from 'next/link'
import { FiRefreshCw, FiCheckCircle, FiShield, FiTarget, FiPenTool, FiBox, FiBarChart } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import StepTimeline from '@/components/StepTimeline'
import RelatedServices from '@/components/RelatedServices'
import { useLanguage } from '@/lib/i18n'

export default function AutomationQaServicePage() {
  const { t } = useLanguage()

  const core = [
    {
      icon: FiRefreshCw,
      title: t('qaCapWorkflowTitle'),
      description: t('qaCapWorkflowDesc'),
    },
    {
      icon: FiCheckCircle,
      title: t('qaCapTestTitle'),
      description: t('qaCapTestDesc'),
    },
    {
      icon: FiShield,
      title: t('qaCapGatesTitle'),
      description: t('qaCapGatesDesc'),
    },
  ]

  const journey = [
    {
      icon: FiTarget,
      title: t('qaJourneyTargetTitle'),
      description: t('qaJourneyTargetDesc'),
    },
    {
      icon: FiPenTool,
      title: t('qaJourneyDesignTitle'),
      description: t('qaJourneyDesignDesc'),
    },
    {
      icon: FiBox,
      title: t('qaJourneyBuildTitle'),
      description: t('qaJourneyBuildDesc'),
    },
    {
      icon: FiShield,
      title: t('qaJourneyHardenTitle'),
      description: t('qaJourneyHardenDesc'),
    },
    {
      icon: FiBarChart,
      title: t('qaJourneyMeasureTitle'),
      description: t('qaJourneyMeasureDesc'),
    },
  ]

  const bullets = [
    {
      bold: t('qaBullet1Bold'),
      text: t('qaBullet1Text'),
    },
    {
      bold: t('qaBullet2Bold'),
      text: t('qaBullet2Text'),
    },
    {
      bold: t('qaBullet3Bold'),
      text: t('qaBullet3Text'),
    },
    {
      bold: t('qaBullet4Bold'),
      text: t('qaBullet4Text'),
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-bg py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgba(54,226,180,0.09) 0%, rgba(0,0,0,0) 60%)', maskImage: 'radial-gradient(1200px 600px at 50% -10%, black 40%, transparent 70%)' }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background:repeating-linear-gradient(45deg,transparent,transparent_28px,_rgba(255,255,255,0.03)_30px,_rgba(255,255,255,0.03)_32px)]" />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-semibold text-text">
            {t('qaHeroTitle')}
          </h1>
          <p className="mt-6 text-lg text-muted">
            {t('qaHeroTagline')}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
            >
              {t('qaHeroCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Automation & QA */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('qaWhyTitle')}
          </h2>
          <p className="mt-4 text-muted">
            {t('qaWhyBody')}
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('qaApproachTitle')}
          </h2>
          <p className="mt-4 text-muted">
            {t('qaApproachBody1')}
          </p>
          <p className="mt-4 text-muted">
            {t('qaApproachBody2')}
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('qaCapTitle')}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {core.map(c => (
              <CoreCapability key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('qaJourneyTitle')}
          </h2>
          <div className="mt-8 text-muted">
            <StepTimeline steps={journey} />
          </div>
        </div>
      </section>

      {/* Engage the Future */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('qaEngageTitle')}
          </h2>
          <p className="mt-4 text-muted">
            {t('qaEngageIntro')}
          </p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            {bullets.map(b => (
              <li key={b.bold}>
                <span className="font-medium text-text">{b.bold}</span>
                {b.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RelatedServices currentSlug="automation-qa" />
    </main>
  )
}
