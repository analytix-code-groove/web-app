"use client"

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

const services = [
  { href: '/services/data', label: 'dataEngineering' },
  { href: '/services/devops', label: 'cloudDevops' },
  { href: '/services/analytics', label: 'analytics' },
  { href: '/services/ai', label: 'aiAutomation' },
  { href: '/services/apps', label: 'appsApis' },
]

const company = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
  { href: '/login', label: 'login' },
]

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-stroke/60 bg-surface/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-base text-text">{t('services')}</h3>
            <ul className="space-y-2 text-sm text-muted">
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="transition-colors hover:text-text">
                    {t(s.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-base text-text">{t('company')}</h3>
            <ul className="space-y-2 text-sm text-muted">
              {company.map(c => (
                <li key={c.href}>
                  <Link href={c.href} className="transition-colors hover:text-text">
                    {t(c.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} AnalytiX | Code Groove. {t('rights')}
        </p>
      </div>
    </footer>
  )
}
