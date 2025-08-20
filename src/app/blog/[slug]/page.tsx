import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
  return { title: `${post.title} | Analytix Code Groove`, description: post.excerpt }
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
      {post.cover_url && (
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-md">
          <Image
            src={post.cover_url}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}
      <article className="mt-8 text-text">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body_md}</ReactMarkdown>
      </article>
    </main>
  )
}
