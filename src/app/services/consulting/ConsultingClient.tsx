'use client';
import Link from 'next/link'
import { FiTrendingUp, FiLayers, FiShield, FiFileText } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import RelatedServices from '@/components/RelatedServices'
import { useLanguage } from '@/lib/i18n'

export default function ITConsultingServicePage() {
  const { t } = useLanguage()

  const when = [
    {
      icon: FiTrendingUp,
      title: t('consultWhen1Title'),
      description: t('consultWhen1Desc'),
    },
    {
      icon: FiLayers,
      title: t('consultWhen2Title'),
      description: t('consultWhen2Desc'),
    },
    {
      icon: FiShield,
      title: t('consultWhen3Title'),
      description: t('consultWhen3Desc'),
    },
    {
      icon: FiFileText,
      title: t('consultWhen4Title'),
      description: t('consultWhen4Desc'),
    },
  ]

  const what = [
    { bold: t('consultWhat1Bold'), text: t('consultWhat1Text') },
    { bold: t('consultWhat2Bold'), text: t('consultWhat2Text') },
    { bold: t('consultWhat3Bold'), text: t('consultWhat3Text') },
    { bold: t('consultWhat4Bold'), text: t('consultWhat4Text') },
    { bold: t('consultWhat5Bold'), text: t('consultWhat5Text') },
  ]

  const engage = [
    { title: t('consultEngage1Title'), tag: t('consultEngage1Tag'), body: t('consultEngage1Body') },
    { title: t('consultEngage2Title'), tag: t('consultEngage2Tag'), body: t('consultEngage2Body') },
    { title: t('consultEngage3Title'), tag: t('consultEngage3Tag'), body: t('consultEngage3Body') },
    { title: t('consultEngage4Title'), tag: t('consultEngage4Tag'), body: t('consultEngage4Body') },
    { title: t('consultEngage5Title'), tag: t('consultEngage5Tag'), body: t('consultEngage5Body') },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-bg py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgba(54,226,180,0.09) 0%, rgba(0,0,0,0) 60%)', maskImage: 'radial-gradient(1200px 600px at 50% -10%, black 40%, transparent 70%)' }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background:repeating-linear-gradient(45deg,transparent,transparent_28px,_rgba(255,255,255,0.03)_30px,_rgba(255,255,255,0.03)_32px)]" />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-semibold text-text">
            {t('consultHeroTitle')}
          </h1>
          <p className="mt-6 text-lg text-muted">
            {t('consultHeroTagline')}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
            >
              {t('consultHeroCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* When to Bring Us In */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('consultWhenHeading')}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {when.map(c => (
              <CoreCapability key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('consultWhatHeading')}
          </h2>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            {what.map(w => (
              <li key={w.bold}>
                <span className="font-medium text-text">{w.bold}</span>
                {w.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How We Engage */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('consultEngageHeading')}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {engage.map(e => (
              <div key={e.title} className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
                <h3 className="font-medium text-text">{e.title}</h3>
                <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">{e.tag}</span>
                <p className="mt-3 text-sm text-muted">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POV */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('consultPovHeading')}
          </h2>
          <p className="mt-4 text-muted">
            {t('consultPovBody')}
          </p>
        </div>
      </section>

      {/* Ready to Move */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">{t('consultReadyHeading')}</h2>
          <p className="mt-4 text-muted">
            {t('consultReadyBody')}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
            >
              {t('consultReadyCta')}
            </Link>
          </div>
        </div>
      </section>
      <RelatedServices currentSlug="consulting" />
    </main>
  )
}
