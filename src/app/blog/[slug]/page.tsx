import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Params {
  slug: string
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/api/posts/${slug}`, { cache: 'no-store' })
  if (!res.ok) {
    return { title: 'Post not found' }
  }
  const post = await res.json()
  return { title: `${post.title} | AnalytiX`, description: post.excerpt }
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/api/posts/${slug}`, { cache: 'no-store' })
  if (!res.ok) notFound()
  const post = await res.json()
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-semibold text-text">{post.title}</h1>
      <p className="mt-2 text-muted">{post.excerpt}</p>
      <article className="mt-8 whitespace-pre-wrap text-text">{post.body_md}</article>
    </main>
  )
}
