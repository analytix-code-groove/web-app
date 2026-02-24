import type { Metadata } from 'next'
import BookmarksClient from './BookmarksClient'

export const metadata: Metadata = {
  title: 'Bookmarks',
  robots: { index: false },
}

export default function BookmarksPage() {
  return <BookmarksClient />
}
