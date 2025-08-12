'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/about', label: 'About' },
  {
    href: '/solutions',
    label: 'Solutions',
    children: [
      {
        href: '/services/data',
        label: 'Data Engineering',
        description: 'ETL pipelines, warehouses & lakes',
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
        label: 'Cloud & DevOps',
        description: 'Infrastructure automation & reliability',
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
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-stroke/60 bg-surface/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" aria-label="AnalytiX Code Groove" className="flex items-center gap-2">
          <span className="text-text font-semibold tracking-wide">analyti<span className="text-mint">x</span></span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(l => {
            const active = pathname.startsWith(l.href)
            if (l.children) {
              return (
                <div
                  key={l.href}
                  className="relative flex items-center"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link
                    href={l.href}
                    className={`text-sm font-bold transition-colors ${
                      active ? 'text-mint' : 'text-text/80 hover:text-text'
                    }`}
                  >
                    {l.label}
                  </Link>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`ml-1 h-4 w-4 transition-transform ${
                      solutionsOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                  {solutionsOpen && (
                    <div className="absolute left-1/2 top-full mt-5 w-80 -translate-x-1/2 rounded-xl border border-stroke/60 bg-surface p-4 shadow-soft">
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
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="block text-xs text-text/70">
                                  {child.description}
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
                {l.label}
              </Link>
            )
          })}
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="text-sm text-text/80 transition-colors hover:text-text"
          >
            Log in
          </Link>
          <Link
            href="/contact"
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft hover:opacity-90"
          >
            Let’s talk
          </Link>
        </div>
      </nav>
    </header>
  )
}
