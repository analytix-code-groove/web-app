'use client';
import Link from 'next/link'
import { FiList, FiCpu, FiBox, FiCode, FiShield, FiUpload, FiTrendingUp } from 'react-icons/fi'
import StepTimeline from '@/components/StepTimeline'
import CodeToggle from '@/components/CodeToggle'
import RelatedServices from '@/components/RelatedServices'
import { useLanguage } from '@/lib/i18n'

export default function AppsServicePage() {
  const { t } = useLanguage()

  const journey = [
    {
      icon: FiList,
      title: t('appsJourney1Title'),
      description: t('appsJourney1Desc'),
    },
    {
      icon: FiCpu,
      title: t('appsJourney2Title'),
      description: t('appsJourney2Desc'),
    },
    {
      icon: FiBox,
      title: t('appsJourney3Title'),
      description: t('appsJourney3Desc'),
    },
    {
      icon: FiCode,
      title: t('appsJourney4Title'),
      description: t('appsJourney4Desc'),
    },
    {
      icon: FiShield,
      title: t('appsJourney5Title'),
      description: t('appsJourney5Desc'),
    },
    {
      icon: FiUpload,
      title: t('appsJourney6Title'),
      description: t('appsJourney6Desc'),
    },
    {
      icon: FiTrendingUp,
      title: t('appsJourney7Title'),
      description: t('appsJourney7Desc'),
    },
  ]

  const bullets = [
    {
      bold: t('appsBullet1Bold'),
      text: t('appsBullet1Text'),
    },
    {
      bold: t('appsBullet2Bold'),
      text: t('appsBullet2Text'),
    },
    {
      bold: t('appsBullet3Bold'),
      text: t('appsBullet3Text'),
    },
    {
      bold: t('appsBullet4Bold'),
      text: t('appsBullet4Text'),
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
            {t('appsHeroTitle')}
          </h1>
          <p className="mt-6 text-lg text-muted">
            {t('appsHeroTagline')}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
            >
              {t('appsHeroCta')}
            </Link>
          </div>
          <CodeToggle />
        </div>
      </section>

      {/* Why Modern Apps */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('appsWhyTitle')}
          </h2>
          <p className="mt-4 text-muted">
            {t('appsWhyP1')}
          </p>
          <p className="mt-4 text-muted">
            {t('appsWhyP2')}
          </p>
          <p className="mt-4 text-muted">
            {t('appsWhyP3')}
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('appsApproachTitle')}
          </h2>
          <p className="mt-4 text-muted">
            {t('appsApproachP1')}
          </p>
          <p className="mt-4 text-muted">
            {t('appsApproachP2')}
          </p>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('appsJourneyTitle')}
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
            {t('appsEngageTitle')}
          </h2>
          <p className="mt-4 text-muted">
            {t('appsEngageSubtitle')}
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
      <RelatedServices currentSlug="apps" />
    </main>
  )
}
