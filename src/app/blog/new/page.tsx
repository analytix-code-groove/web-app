import type { Metadata } from 'next'
import NewPostClient from './NewPostClient'

export const metadata: Metadata = {
  title: 'New Post',
  robots: { index: false },
}

export default function NewPostPage() {
  return <NewPostClient />
}
