"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logo from '@/images/logos/desktop/logo_footer.png'

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
        <div className="flex flex-col items-center gap-y-8 md:flex-row md:items-center">
          {/* Logo */}
          <div className="flex justify-center md:w-1/2 md:justify-start">
            <Link
              href="/"
              aria-label="Analytix Code Groove"
              className="block w-[160px] md:shrink-0"
            >
              <Image src={logo} alt="Analytix Code Groove" width={160} height={46} />
            </Link>
          </div>

          {/* Link groups */}
          <div className="flex justify-center md:w-1/2 md:justify-start">
            <div className="flex flex-nowrap items-start gap-x-10">
              {/* Services (two internal columns) */}
              <div className="grid w-[260px] shrink-0 grid-cols-[auto_auto] gap-x-2">
                <h3 className="col-span-2 mb-1.5 text-[14px] font-semibold text-text">
                  {t('services')}
                </h3>

                <ul className="list-none pl-0 space-y-1 text-[12px] leading-5 text-muted">
                  {serviceLinks.slice(0, 3).map(s => (
                    <li key={s.href}>
                      <Link href={s.href} className="transition-colors hover:text-text">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <ul className="list-none pl-0 space-y-1 text-[12px] leading-5 text-muted">
                  {serviceLinks.slice(3).map(s => (
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
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-stroke/60" />

        {/* Bottom bar: © on the left, socials on the right */}
        <div className="mt-4 flex items-center justify-between text-xs text-muted">
          <p>© Analytixcg</p>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com"
              aria-label="X"
              className="hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/analytixcg"
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
