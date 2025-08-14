"use client"

type Card = { title: string; blurb: string; href: string }
const cards: Card[] = [
  { title: 'dataEngineering', blurb: 'dataEngineeringCard', href: '/services/data' },
  { title: 'cloudDevops', blurb: 'cloudDevopsCard', href: '/services/devops' },
  { title: 'analytics', blurb: 'analyticsCard', href: '/services/analytics' },
  { title: 'aiAutomation', blurb: 'aiAutomationCard', href: '/services/ai' },
  { title: 'appsApis', blurb: 'appsApisCard', href: '/services/apps' },
  { title: 'itConsulting', blurb: 'itConsultingCard', href: '/services/consulting' },
]

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export default function ServiceCards() {
  const { t } = useLanguage()
  return (
    <section className="bg-bg py-14 mb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(c => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft transition hover:border-mint/60"
          >
            <h3 className="font-heading text-lg font-semibold text-text group-hover:text-mint">{t(c.title)}</h3>
            <p className="mt-2 text-sm text-muted">{t(c.blurb)}</p>
            <span className="mt-4 inline-block text-sm text-mint">{t('learnMore')}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
