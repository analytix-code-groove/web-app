"use client"

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n'
import { FiActivity, FiZap, FiFeather, FiDollarSign, FiShoppingCart } from 'react-icons/fi'

function useCountUp(end: number, duration = 1500) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const steps = 40
    const increment = end / steps
    const interval = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, interval)
    return () => clearInterval(timer)
  }, [started, end, duration])

  return { count, ref }
}

function CountUpStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end)
  return (
    <div ref={ref}>
      <span className="text-4xl font-bold text-mint">{count}{suffix}</span>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  )
}

export default function MoreInfo() {
  const { t, lang } = useLanguage()

  const stats = [
    { end: 20, suffix: '+', labelKey: 'yearsExperience' },
    { end: 5, suffix: '', labelKey: 'industriesServed' },
    { end: 7, suffix: '', labelKey: 'serviceAreas' },
  ]

  const industries = [
    { Icon: FiActivity, titleKey: 'healthcareIndustry', descKey: 'healthcareIndustryDesc' },
    { Icon: FiZap, titleKey: 'energyIndustry', descKey: 'energyIndustryDesc' },
    { Icon: FiFeather, titleKey: 'agroIndustry', descKey: 'agroIndustryDesc' },
    { Icon: FiDollarSign, titleKey: 'financialIndustry', descKey: 'financialIndustryDesc' },
    { Icon: FiShoppingCart, titleKey: 'retailIndustry', descKey: 'retailIndustryDesc' },
  ]

  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="font-heading text-3xl font-semibold text-text sm:text-4xl">
          {lang === 'en' ? (
            <>Why <span className="text-mint">Us</span>?</>
          ) : (
            <>¿Por qué <span className="text-mint">nosotros</span>?</>
          )}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted">
          {t('moreInfoBody')}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <CountUpStat key={stat.labelKey} end={stat.end} suffix={stat.suffix} label={t(stat.labelKey)} />
          ))}
        </div>

        <h3 className="mt-16 mb-8 font-heading text-xl font-semibold text-text">
          {t('industriesHeading')}
        </h3>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map(({ Icon, titleKey, descKey }) => (
            <li
              key={titleKey}
              className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft transition hover:border-mint/60"
            >
              <Icon className="mx-auto mb-3 text-mint" size={32} />
              <h4 className="font-heading text-base font-semibold text-text">
                {t(titleKey)}
              </h4>
              <p className="mt-1 text-sm text-muted">{t(descKey)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
