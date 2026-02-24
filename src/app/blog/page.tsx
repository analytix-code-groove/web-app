import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on data engineering, cloud, and automation from the Analytix team.',
}

export default function BlogPage() {
  return <BlogClient />
}
