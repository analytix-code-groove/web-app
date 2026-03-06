'use client';
import Link from 'next/link'
import { FiTrendingUp, FiUsers, FiClock, FiTarget } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import RelatedServices from '@/components/RelatedServices'
import { useLanguage } from '@/lib/i18n'

export default function StaffAugmentationClient() {
  const { t } = useLanguage()

  const when = [
    {
      icon: FiTrendingUp,
      title: t('saWhen1Title'),
      description: t('saWhen1Desc'),
    },
    {
      icon: FiUsers,
      title: t('saWhen2Title'),
      description: t('saWhen2Desc'),
    },
    {
      icon: FiClock,
      title: t('saWhen3Title'),
      description: t('saWhen3Desc'),
    },
    {
      icon: FiTarget,
      title: t('saWhen4Title'),
      description: t('saWhen4Desc'),
    },
  ]

  const what = [
    { bold: t('saWhat1Bold'), text: t('saWhat1Text') },
    { bold: t('saWhat2Bold'), text: t('saWhat2Text') },
    { bold: t('saWhat3Bold'), text: t('saWhat3Text') },
    { bold: t('saWhat4Bold'), text: t('saWhat4Text') },
    { bold: t('saWhat5Bold'), text: t('saWhat5Text') },
  ]

  const how = [
    { title: t('saHow1Title'), tag: t('saHow1Tag'), body: t('saHow1Body') },
    { title: t('saHow2Title'), tag: t('saHow2Tag'), body: t('saHow2Body') },
    { title: t('saHow3Title'), tag: t('saHow3Tag'), body: t('saHow3Body') },
    { title: t('saHow4Title'), tag: t('saHow4Tag'), body: t('saHow4Body') },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-bg py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgba(54,226,180,0.09) 0%, rgba(0,0,0,0) 60%)', maskImage: 'radial-gradient(1200px 600px at 50% -10%, black 40%, transparent 70%)' }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background:repeating-linear-gradient(45deg,transparent,transparent_28px,_rgba(255,255,255,0.03)_30px,_rgba(255,255,255,0.03)_32px)]" />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-semibold text-text">
            {t('saHeroTitle')}
          </h1>
          <p className="mt-6 text-lg text-muted">
            {t('saHeroTagline')}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
            >
              {t('saHeroCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* When Staff Augmentation Fits */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('saWhenHeading')}
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
            {t('saWhatHeading')}
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

      {/* How It Works */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('saHowHeading')}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {how.map(e => (
              <div key={e.title} className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
                <h3 className="font-medium text-text">{e.title}</h3>
                <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">{e.tag}</span>
                <p className="mt-3 text-sm text-muted">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('saCommitmentHeading')}
          </h2>
          <p className="mt-4 text-muted">
            {t('saCommitmentBody')}
          </p>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">{t('saReadyHeading')}</h2>
          <p className="mt-4 text-muted">
            {t('saReadyBody')}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
            >
              {t('saReadyCta')}
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="staff-augmentation" />
    </main>
  )
}
