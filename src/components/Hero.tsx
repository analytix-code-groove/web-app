"use client"

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative isolate overflow-hidden bg-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 60% at 70% 20%, rgba(54,226,180,0.09) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(17,20,24,1) 0%, rgba(11,14,17,1) 100%)',
          maskImage:
            'radial-gradient(1200px 600px at 50% -10%, black 40%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 -z-10 opacity-20 [background:repeating-linear-gradient(45deg,transparent,transparent_28px,_rgba(255,255,255,0.03)_30px,_rgba(255,255,255,0.03)_32px)]" />
      <div className="mx-auto max-w-5xl px-4 py-24 text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-text sm:text-6xl">
          {t('whereData')} <span className="text-mint">{t('meets')}</span> {t('flow')}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted">
          {t('heroParagraph')}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/services"
            className="rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
          >
            {t('seeServices')}
          </Link>
          <Link
            href="/blog"
            className="rounded-xl2 border border-stroke/80 px-5 py-2.5 text-sm text-text/90 hover:border-mint hover:text-text"
          >
            {t('readBlog')}
          </Link>
        </div>
      </div>
    </section>
  )
}
