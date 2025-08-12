'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services/data', label: 'Data Engineering' },
      { href: '/services/devops', label: 'Cloud & DevOps' },
    ],
  },
  { href: '/blog', label: 'Blog' },
  { href: '/bookmarks', label: 'Bookmarks' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
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
            if (l.children) {
              return (
                <div key={l.href} className="relative group">
                  <Link
                    href={l.href}
                    className={`text-sm font-bold transition-colors ${
                      active ? 'text-mint' : 'text-text/80 hover:text-text'
                    }`}
                  >
                    {l.label}
                  </Link>
                  <div className="absolute left-0 mt-2 hidden w-48 flex-col rounded-md border border-stroke/60 bg-surface shadow-soft group-hover:flex">
                    {l.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="px-4 py-2 text-sm text-text/80 hover:bg-mint/10 hover:text-text"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
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
                {l.label}
              </Link>
            )
          })}
        </div>
        <Link
          href="/login"
          className="ml-4 hidden text-sm text-text/80 transition-colors hover:text-text md:inline-block"
        >
          Log in
        </Link>
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
