"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export default function Hero() {
  const { t } = useLanguage()
  const [videoError, setVideoError] = useState(false)

  const scrollToContent = () => {
    const hero = document.getElementById('hero')
    if (hero?.nextElementSibling) {
      hero.nextElementSibling.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-bg">
      {/* Video background — falls back to gradient if file missing */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,14,17,0.85) 0%, rgba(11,14,17,0.7) 50%, rgba(11,14,17,0.9) 100%)',
        }}
      />

      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 60% at 70% 20%, rgba(54,226,180,0.09) 0%, rgba(0,0,0,0) 60%)',
          maskImage:
            'radial-gradient(1200px 600px at 50% -10%, black 40%, transparent 70%)',
        }}
      />

      {/* Diagonal pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background:repeating-linear-gradient(45deg,transparent,transparent_28px,_rgba(255,255,255,0.03)_30px,_rgba(255,255,255,0.03)_32px)]"
      />

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 text-center">
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

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted transition hover:text-mint"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  )
}
