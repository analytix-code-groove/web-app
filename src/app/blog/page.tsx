import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog | Analytix Code Groove',
  description: 'Insights on data engineering, cloud, and automation from the AnalytiX team.',
}

export default function BlogPage() {
  return <BlogClient />
}
