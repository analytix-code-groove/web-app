'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/blog',     label: 'Blog' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b border-stroke/60 bg-surface/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" aria-label="AnalytiX Code Groove" className="flex items-center gap-2">
          <span className="text-text font-semibold tracking-wide">analyti<span className="text-mint">x</span></span>
        </Link>
        <div className="hidden gap-6 md:flex">
          {links.map(l => {
            const active = pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  active ? 'text-mint' : 'text-text/80 hover:text-text'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
        <Link
          href="/contact"
          className="ml-4 hidden rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft hover:opacity-90 md:inline-block"
        >
          Let’s talk
        </Link>
      </nav>
    </header>
  )
}
