"use client"

import Link from 'next/link'
import Image from 'next/image'
import { FiZap, FiPenTool, FiAward, FiCode, FiChevronRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n'

const coreValues = [
  { Icon: FiZap, titleKey: 'valueInnovation', descKey: 'valueInnovationDesc' },
  { Icon: FiPenTool, titleKey: 'valueCreativity', descKey: 'valueCreativityDesc' },
  { Icon: FiAward, titleKey: 'valueDedication', descKey: 'valueDedicationDesc' },
  { Icon: FiCode, titleKey: 'valueExpertise', descKey: 'valueExpertiseDesc' },
]

const howWeWorkBullets = [
  'howWeWorkBullet1',
  'howWeWorkBullet2',
  'howWeWorkBullet3',
  'howWeWorkBullet4',
]

export default function AboutClient() {
  const { t, lang } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative isolate overflow-hidden py-32">
        <Image
          src="/images/about-us-banner.png"
          alt=""
          fill
          aria-hidden
          className="pointer-events-none object-cover"
          sizes="100vw"
          priority
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,14,17,0.85) 0%, rgba(11,14,17,0.7) 50%, rgba(11,14,17,0.9) 100%)',
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            {lang === 'en' ? (
              <>Who We <span className="text-mint">Are</span></>
            ) : (
              <>Quiénes <span className="text-mint">Somos</span></>
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-muted">
            {t('aboutIntro')}
          </p>
        </div>
      </section>

      {/* What Drives Us + How We Work */}
      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-2">
          {/* What Drives Us */}
          <div className="rounded-xl2 border border-stroke/70 bg-bg p-8 shadow-soft transition hover:border-mint/60">
            <h2 className="font-heading text-2xl font-semibold text-text">
              {t('whatDrivesUsHeading')}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {t('whatDrivesUsBody')}
            </p>
          </div>

          {/* How We Work */}
          <div className="rounded-xl2 border border-stroke/70 bg-bg p-8 shadow-soft transition hover:border-mint/60">
            <h2 className="font-heading text-2xl font-semibold text-text">
              {t('howWeWorkHeading')}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {t('howWeWorkBody')}
            </p>
            <ul className="mt-4 space-y-2">
              {howWeWorkBullets.map(key => (
                <li key={key} className="flex items-start gap-2 text-sm text-muted">
                  <FiChevronRight className="mt-0.5 shrink-0 text-mint" size={16} />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="bg-bg py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-semibold text-text sm:text-4xl">
            {t('ourFocusHeading')}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted">
            {t('ourFocusBody')}
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center font-heading text-3xl font-semibold text-text sm:text-4xl">
            {t('coreValuesHeading')}
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map(({ Icon, titleKey, descKey }) => (
              <li
                key={titleKey}
                className="rounded-xl2 border border-stroke/70 bg-bg p-6 text-center shadow-soft transition hover:border-mint/60"
              >
                <Icon className="mx-auto mb-3 text-mint" size={32} />
                <h3 className="font-heading text-base font-semibold text-text">
                  {t(titleKey)}
                </h3>
                <p className="mt-1 text-sm text-muted">{t(descKey)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl font-semibold text-text sm:text-4xl">
            {t('aboutCtaHeading')}{' '}
            <span className="text-mint">{t('aboutCtaAccent')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            {t('aboutCtaSubtitle')}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
            >
              {t('letsTalk')}
            </Link>
            <Link
              href="/services"
              className="rounded-xl2 border border-stroke/80 px-5 py-2.5 text-sm text-text/90 hover:border-mint hover:text-text"
            >
              {t('seeServices')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
