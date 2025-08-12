import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

const links = [
  { href: '/services', label: 'services' },
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
  { href: '/login', label: 'login' },
]

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-stroke/60 bg-surface/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-muted">
        <nav className="mb-4 flex justify-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-text">
              {t(l.label)}
            </Link>
          ))}
        </nav>
        <p>
          &copy; {new Date().getFullYear()} AnalytiX | Code Groove. {t('rights')}
        </p>
      </div>
    </footer>
  )
}
