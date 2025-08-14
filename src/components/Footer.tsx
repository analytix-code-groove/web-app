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
  // Keep original order to avoid SSR/CSR sorting drift
  const serviceLinks = services.map(s => ({ ...s, name: t(s.label) }))

  return (
    <footer className="border-t border-stroke/60 bg-surface/70 backdrop-blur">
      <div className="relative mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-wrap items-stretch justify-center gap-8 md:gap-12">
          {/* Left: Logo + Socials */}
          <div className="flex w-full max-w-[260px] flex-col items-start gap-5 self-stretch justify-center sm:w-auto">
            <Link href="/" aria-label="Analytix Code Groove" className="block w-[160px]">
              <Image src={logo} alt="Analytix Code Groove" width={160} height={46} />
            </Link>

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

          {/* Right: Link columns (Services → Company → Resources) */}
          <div className="flex flex-wrap items-start gap-x-4 gap-y-5 md:gap-x-5">
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

          {/* Center divider */}
          <div className="hidden sm:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-stroke/60" />
        </div>

        {/* Bottom border + copyright */}
        <div className="mt-8 h-px w-full bg-stroke/60" />
        <p className="mt-4 text-center text-xs text-muted">© Analytixcg</p>
      </div>
    </footer>
  )
}
