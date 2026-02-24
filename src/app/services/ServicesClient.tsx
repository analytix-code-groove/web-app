'use client'

import { services } from '@/data/services'
import { useLanguage } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import type { IconType } from 'react-icons'
import {
  FiDatabase,
  FiCpu,
  FiSmartphone,
  FiSettings,
  FiCloud,
  FiMap,
} from 'react-icons/fi'

const iconMap: Record<string, IconType> = {
  FiDatabase,
  FiCpu,
  FiSmartphone,
  FiSettings,
  FiCloud,
  FiMap,
}

function ServiceCard({ s, t }: { s: (typeof services)[number]; t: (key: string) => string }) {
  const IconComponent = s.cardIcons?.[0] ? iconMap[s.cardIcons[0]] : null
  const topFeatures = s.features.slice(0, 3)

  return (
    <Link
      href={`/services/${s.slug}`}
      className="group flex gap-5 rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft transition hover:border-mint/60"
    >
      {IconComponent && (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface">
          <IconComponent className="text-mint" size={24} />
        </div>
      )}
      <div className="min-w-0">
        <h2 className="font-heading text-lg font-semibold text-text group-hover:text-mint">
          {t(s.titleKey)}
        </h2>
        <p className="mt-1 text-sm text-muted">{t(s.descKey)}</p>
        <ul className="mt-3 space-y-1">
          {topFeatures.map(f => (
            <li key={f.titleKey} className="flex items-center gap-2 text-xs text-muted">
              <span className="h-1 w-1 shrink-0 rounded-full bg-mint" />
              {t(f.titleKey)}
            </li>
          ))}
        </ul>
        <span className="mt-4 inline-block text-sm text-mint">{t('learnMore')}</span>
      </div>
    </Link>
  )
}

export default function ServicesClient() {
  const { t, lang } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative isolate overflow-hidden py-32">
        <Image
          src="/images/services_banner.jpg"
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
              <>Our <span className="text-mint">Services</span></>
            ) : (
              <>Nuestros <span className="text-mint">Servicios</span></>
            )}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            {t('servicesHeroSubtitle')}
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 lg:grid-cols-2">
          {services.map(s => (
            <ServiceCard key={s.slug} s={s} t={t} />
          ))}
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
              href="/about"
              className="rounded-xl2 border border-stroke/80 px-5 py-2.5 text-sm text-text/90 hover:border-mint hover:text-text"
            >
              {t('about')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
