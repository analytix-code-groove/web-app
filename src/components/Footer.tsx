"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'
import Script from 'next/script'
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

const ClutchIcon = () => (
  <span className="inline-flex items-center">
    <img
      src="https://www.horizon-labs.co/resources/clutch"
      alt="Clutch"
      className="h-[18px] w-auto"
      loading="lazy"
      decoding="async"
    />
  </span>
)

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
              <Image src={logoFooter} alt="Analytix Code Groove" width={102} height={34} priority />
            </Link>
          </div>

          {/* Right column: links, use a 4-col grid with fixed column widths for visual equality */}
          <div className="md:px-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 items-start text-center sm:grid-cols-2 md:grid-cols-4 md:text-left">
              {/* Services col 1 */}
              <div className="mx-auto max-w-[220px] md:mx-0 md:max-w-none">
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
              <div className="mx-auto max-w-[220px] md:mx-0 md:max-w-none md:pt-[26px]">
                {/* pt aligns top line with the first list under the Services heading on larger screens */}
                <ul className="space-y-1 text-[12px] leading-5 text-muted">
                  {serviceLinks.slice(3).map(s => (
                    <li key={s.href}>
                      <Link href={s.href} className="transition-colors hover:text-text">{s.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="mx-auto max-w-[220px] md:mx-0 md:max-w-none">
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
              <div className="mx-auto max-w-[220px] md:mx-0 md:max-w-none">
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
        <div className="mt-4 flex flex-col items-center gap-3 text-center text-xs text-muted sm:flex-row sm:justify-between sm:text-left">
          <p>© Analytixcg</p>
          <div className="flex items-center gap-2">
            <a
              href="https://clutch.co/profile/analytix-code-groove"
              aria-label="Clutch"
              className="hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ClutchIcon />
            </a>
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
        <div className="mt-4 flex justify-center">
          <div
            className="clutch-widget"
            data-url="https://widget.clutch.co"
            data-widget-type="10"
            data-height="auto"
            data-nofollow="false"
            data-expandifr="true"
            data-darkbg="darkbg"
            data-shape="square"
            data-clutchcompany-id="2607562"
          />
        </div>
      </div>
      <Script src="https://widget.clutch.co/static/js/widget.js" strategy="afterInteractive" />
    </footer>
  )
}
