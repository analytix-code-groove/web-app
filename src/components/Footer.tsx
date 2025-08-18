"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logoFooter from '@/images/logos/desktop/logo_footer.png'

const services = [
  { href: '/services/ai', label: 'aiAutomation' },
  { href: '/services/automation-qa', label: 'automationQa' },
  { href: '/services/apps', label: 'appsApis' },
  { href: '/services/devops', label: 'cloudDevops' },
  { href: '/services/data-analytics', label: 'dataAnalytics' },
  { href: '/services/consulting', label: 'itConsulting' },
]

const company = [
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
]

export default function Footer() {
  const { t } = useLanguage()
  const serviceLinks = services.map(s => ({ ...s, name: t(s.label) }))

  return (
    <footer className="border-t border-stroke/60 bg-surface/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Top row: two columns; center-align vertically so logo is centered */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          {/* Left column: logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" aria-label="Analytix Code Groove" className="flex items-center gap-2 md:shrink-0">
              <Image src={logoFooter} alt="Analytix Code Groove" width={120} height={40} priority />
            </Link>
          </div>

          {/* Right column: links, use a 4-col grid with fixed column widths for visual equality */}
          <div className="px-6">
            <div className="grid grid-cols-4 gap-x-8 items-start">
              {/* Services col 1 */}
              <div className="w-[11rem]">
                <h3 className="mb-1.5 text-[14px] font-semibold text-text">{t('services')}</h3>
                <ul className="space-y-1 text-[12px] leading-5 text-muted">
                  {serviceLinks.slice(0, 3).map(s => (
                    <li key={s.href}>
                      <Link href={s.href} className="transition-colors hover:text-text">{s.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services col 2 (same width as every other column) */}
              <div className="w-[11rem] pt-[26px]">
                {/* pt aligns top line with the first list under the Services heading */}
                <ul className="space-y-1 text-[12px] leading-5 text-muted">
                  {serviceLinks.slice(3).map(s => (
                    <li key={s.href}>
                      <Link href={s.href} className="transition-colors hover:text-text">{s.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="w-[11rem]">
                <h3 className="mb-1.5 text-[14px] font-semibold text-text">{t('company')}</h3>
                <ul className="space-y-1 text-[12px] leading-5 text-muted">
                  {company.map(c => (
                    <li key={c.href}>
                      <Link href={c.href} className="transition-colors hover:text-text">{t(c.label)}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="w-[11rem]">
                <h3 className="mb-1.5 text-[14px] font-semibold text-text">{t('Resources')}</h3>
                <ul className="space-y-1 text-[12px] leading-5 text-muted">
                  <li>
                    <Link href="/blog" className="transition-colors hover:text-text">{t('blog')}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-stroke/60" />

        {/* Bottom bar */}
        <div className="mt-4 flex items-center justify-between text-xs text-muted">
          <p>© Analytixcg</p>
          <div className="flex items-center gap-2">
            <a
              href="https://x.com/Analytixcg"
              aria-label="X"
              className="hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/Analytixcg"
              aria-label="LinkedIn"
              className="hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
