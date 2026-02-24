'use client';
import Link from 'next/link'
import { FiSearch, FiShield, FiCheckCircle, FiBox, FiPlayCircle, FiRefreshCw, FiTrendingUp } from 'react-icons/fi'
import StepTimeline from '@/components/StepTimeline'
import CoreCapability from '@/components/CoreCapability'
import RelatedServices from '@/components/RelatedServices'
import { useLanguage } from '@/lib/i18n'

export default function GenerativeAIServicePage() {
  const { t } = useLanguage()

  const useCases = [
    {
      icon: FiSearch,
      title: t('aiUseCaseDocTitle'),
      description: t('aiUseCaseDocDesc'),
    },
    {
      icon: FiShield,
      title: t('aiUseCaseCodeTitle'),
      description: t('aiUseCaseCodeDesc'),
    },
  ]

  const journey = [
    {
      icon: FiSearch,
      title: t('aiJourneyIdentifyTitle'),
      description: t('aiJourneyIdentifyDesc'),
    },
    {
      icon: FiCheckCircle,
      title: t('aiJourneyAssessTitle'),
      description: t('aiJourneyAssessDesc'),
    },
    {
      icon: FiBox,
      title: t('aiJourneyValidateTitle'),
      description: t('aiJourneyValidateDesc'),
    },
    {
      icon: FiPlayCircle,
      title: t('aiJourneyBuildTitle'),
      description: t('aiJourneyBuildDesc'),
    },
    {
      icon: FiTrendingUp,
      title: t('aiJourneyOptimizeTitle'),
      description: t('aiJourneyOptimizeDesc'),
    },
    {
      icon: FiRefreshCw,
      title: t('aiJourneyLaunchTitle'),
      description: t('aiJourneyLaunchDesc'),
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
            {t('aiHeroTitle')}
          </h1>
          <p className="mt-6 text-lg text-muted">
            {t('aiHeroTagline')}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
            >
              {t('aiHeroCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('aiUseCasesHeading')}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {useCases.map(c => (
              <CoreCapability key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Generative AI */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('aiWhyHeading')}
          </h2>
          <p className="mt-8 text-muted">
            {t('aiWhyBody')}
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('aiApproachHeading')}
          </h2>
          <p className="mt-4 text-muted">
            {t('aiApproachBody')}
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('aiJourneyHeading')}
          </h2>
          <div className="mt-8 text-muted">
            <StepTimeline steps={journey} />
          </div>
        </div>
      </section>

      {/* Future of Work */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('aiFutureHeading')}
          </h2>
          <p className="mt-4 text-muted">
            {t('aiFutureIntro')}
          </p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">
                {t('aiFutureBullet1Bold')}
              </span>
              {t('aiFutureBullet1Text')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('aiFutureBullet2Bold')}
              </span>
              {t('aiFutureBullet2Text')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('aiFutureBullet3Bold')}
              </span>
              {t('aiFutureBullet3Text')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('aiFutureBullet4Bold')}
              </span>
              {t('aiFutureBullet4Text')}
            </li>
          </ul>
        </div>
      </section>
      <RelatedServices currentSlug="ai" />
    </main>
  )
}
