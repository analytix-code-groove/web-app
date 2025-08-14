"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo from '@/images/logos/desktop/logo_footer.png'

const services = [
  { href: '/services/ai', label: 'aiAutomation' },
  { href: '/services/analytics', label: 'analytics' },
  { href: '/services/apps', label: 'appsApis' },
  { href: '/services/devops', label: 'cloudDevops' },
  { href: '/services/data', label: 'dataEngineering' },
]

const company = [
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
]

export default function Footer() {
  const { t } = useLanguage()
  const serviceLinks = services
    .map(s => ({ ...s, name: t(s.label) }))
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <footer className="border-t border-stroke/60 bg-surface/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* items-stretch lets the divider fill the column height */}
        <div className="flex flex-wrap items-stretch gap-8 md:gap-12">

        {/* Left: Logo + Socials (centered vertically) */}
        <div className="flex w-full max-w-[260px] sm:w-auto flex-col items-start gap-5 self-stretch justify-center">
          <Link href="/" aria-label="Analytix Code Groove" className="block w-[160px]">
            <Image src={logo} alt="Analytix Code Groove" width={160} height={46} />
          </Link>

          {/* icons centered relative to the logo width */}
          <div className="flex w-[160px] justify-center gap-4 text-muted">
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-text" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={18} />
            </a>
            <a href="https://github.com" aria-label="GitHub" className="hover:text-text" target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-text" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

          {/* Vertical divider: stretches to match the tallest sibling */}
          <div className="hidden self-stretch w-px bg-stroke/60 sm:block" />

          {/* Right: Link columns (Services → Company → Blog) */}
          <div className="flex flex-1 flex-wrap items-start gap-x-4 md:gap-x-5 gap-y-5">
            {/* Services */}
            <div className="w-[150px] shrink-0">
              <h3 className="mb-1.5 text-[14px] font-semibold text-text">{t('services')}</h3>
              <ul className="space-y-1 text-[12px] leading-5 text-muted">
                {serviceLinks.map(s => (
                  <li key={s.href}>
                    <Link href={s.href} className="transition-colors hover:text-text">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="w-[150px] shrink-0">
              <h3 className="mb-1.5 text-[14px] font-semibold text-text">{t('company')}</h3>
              <ul className="space-y-1 text-[12px] leading-5 text-muted">
                {company.map(c => (
                  <li key={c.href}>
                    <Link href={c.href} className="transition-colors hover:text-text">
                      {t(c.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="w-[150px] shrink-0">
              <h3 className="mb-1.5 text-[14px] font-semibold text-text">{t('Resources')}</h3>
              <ul className="space-y-1 text-[12px] leading-5 text-muted">
                <li>
                  <Link href="/blog" className="transition-colors hover:text-text">
                    {t('blog')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom border + copyright */}
        <div className="mt-8 h-px w-full bg-stroke/60" />
        <p className="mt-4 text-center text-sm text-muted">© Analytixcg</p>
      </div>
    </footer>
  )
}
