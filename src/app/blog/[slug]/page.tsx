// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const revalidate = 60 // or: export const dynamic = 'force-dynamic'

type Params = { slug: string }

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

async function fetchPost(slug: string) {
  const res = await fetch(`${BASE_URL}/api/posts/${slug}`, {
    // If you kept revalidate above, omit cache here and let ISR handle it.
    // cache: 'no-store',
    next: { revalidate },
  })
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Failed to load post: ${res.status}`)
  return res.json()
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params
  const post = await fetchPost(slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.title} | Analytix Code Groove`,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      images: post.cover_url ? [post.cover_url] : undefined,
      type: 'article',
    },
    twitter: {
      card: post.cover_url ? 'summary_large_image' : 'summary',
      title: post.title,
      description: post.excerpt ?? undefined,
      images: post.cover_url ? [post.cover_url] : undefined,
    },
  }
}

export default async function BlogPostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params
  const post = await fetchPost(slug)
  if (!post) notFound()

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-semibold text-text">{post.title}</h1>
      {post.excerpt && <p className="mt-2 text-muted">{post.excerpt}</p>}

      {post.cover_url && (
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-md">
          <Image
            src={post.cover_url}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <article className="prose prose-neutral dark:prose-invert mt-8 max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.body_md ?? ''}
        </ReactMarkdown>
      </article>
    </main>
  )
}
