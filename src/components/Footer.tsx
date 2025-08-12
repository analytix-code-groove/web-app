import Link from 'next/link'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/login', label: 'Log in' },
]

export default function Footer() {
  return (
    <footer className="border-t border-stroke/60 bg-surface/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-muted">
        <nav className="mb-4 flex justify-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-text">
              {l.label}
            </Link>
          ))}
        </nav>
        <p>&copy; {new Date().getFullYear()} AnalytiX | Code Groove. All rights reserved.</p>
      </div>
    </footer>
  )
}
