import type { Metadata } from 'next'
import NotFoundClient from './NotFoundClient'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return <NotFoundClient />
}
