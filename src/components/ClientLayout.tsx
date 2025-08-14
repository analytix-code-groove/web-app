'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const showChrome = pathname !== '/login'

  useEffect(() => {
    if (pathname === '/login') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [pathname])

  return (
    <>
      {showChrome && <Navbar />}
      <div className="flex-1">{children}</div>
      {showChrome && <Footer />}
    </>
  )
}

