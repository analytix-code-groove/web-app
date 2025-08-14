'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n'

const links = [
  { href: '/about', label: 'about' },
  {
    href: '/services',
    label: 'services',
    children: [
      {
        href: '/services/data',
        label: 'dataEngineering',
        description: 'dataEngineeringDesc',
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <ellipse cx="12" cy="6" rx="7" ry="3" />
            <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
            <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
          </svg>
        ),
      },
      {
        href: '/services/devops',
        label: 'cloudDevops',
        description: 'cloudDevopsDesc',
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path d="M17 16a4 4 0 0 0 0-8 6 6 0 0 0-11.8 1.46A4 4 0 0 0 6 20h11" />
          </svg>
        ),
      },
    ],
  },
  { href: '/blog', label: 'blog' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { t, lang, setLang } = useLanguage()

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const closeMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 100)
  }
  return (
    <header className="sticky top-0 z-50 border-b border-stroke/60 bg-surface/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" aria-label="AnalytiX Code Groove" className="flex items-center gap-2">
          <span className="text-text font-semibold tracking-wide text-[1.5rem]">analyti<span className="text-mint">x</span></span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(l => {
            const active = pathname.startsWith(l.href)
            if (l.children) {
              return (
                <div
                  key={l.href}
                  className="relative flex items-center"
                  onMouseEnter={openMenu}
                  onMouseLeave={closeMenu}
                >
                  <Link
                    href={l.href}
                    className={`text-sm font-bold transition-colors ${
                      active ? 'text-mint' : 'text-text/80 hover:text-text'
                    }`}
                  >
                    {t(l.label)}
                  </Link>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`ml-1 h-4 w-4 transition-transform ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                  {servicesOpen && (
                    <div
                      onMouseEnter={openMenu}
                      onMouseLeave={closeMenu}
                      className="absolute left-1/2 top-full mt-4 w-80 -translate-x-1/2 rounded-xl border border-stroke/60 bg-surface p-4 shadow-soft"
                    >
                      <div className="grid gap-4">
                        {l.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-start gap-3 rounded-md p-2 hover:bg-mint/10"
                          >
                            <span className="flex h-8 w-8 items-center justify-center rounded bg-mint/20 text-mint">
                              {child.icon}
                            </span>
                            <span className="text-left">
                              <span className="block text-sm font-semibold text-text">
                                {t(child.label)}
                              </span>
                              {child.description && (
                                <span className="block text-xs text-text/70">
                                  {t(child.description)}
                                </span>
                              )}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-bold transition-colors ${
                  active ? 'text-mint' : 'text-text/80 hover:text-text'
                }`}
              >
                {t(l.label)}
              </Link>
            )
          })}
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="text-sm text-text/80 transition-colors hover:text-text"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <Link
            href="/login"
            className="text-sm text-text/80 transition-colors hover:text-text"
          >
            {t('login')}
          </Link>
          <Link
            href="/contact"
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft hover:opacity-90"
          >
            {t('letsTalk')}
          </Link>
        </div>
      </nav>
    </header>
  )
}
