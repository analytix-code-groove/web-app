// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import ShareButtons from '@/components/ShareButtons'
import { headers } from 'next/headers'
import fs from 'node:fs'
import path from 'node:path'
import { createSupabaseServerClient } from '@/lib/supabase'

export const revalidate = 60 // or: export const dynamic = 'force-dynamic'

type Params = { slug: string }

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

async function fetchPost(slug: string, lang: string) {
  const res = await fetch(`${BASE_URL}/api/posts/${slug}?lang=${lang}`, {
    next: { revalidate },
  })
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Failed to load post: ${res.status}`)
  return res.json()
}

function loadLocalEnv(): Record<string, string> {
  try {
    const file = fs.readFileSync(path.join(process.cwd(), 'supabase.local.json'), 'utf8')
    return JSON.parse(file) as Record<string, string>
  } catch {
    return {}
  }
}

async function fetchAuthorName(authorId: string) {
  try {
    const supabase = createSupabaseServerClient()
    const { data, error } = await supabase
      .schema('content')
      .from('vw_authors_public')
      .select('full_name')
      .eq('id', authorId)
      .single()
    if (error) {
      console.error('Failed to load author', error)
      return null
    }
    return data?.full_name ?? null
  } catch (e) {
    console.error('Unexpected author fetch error', e)
    return null
  }
}
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params
  const headersList = await headers()
  const langHeader = headersList.get('accept-language')?.toLowerCase() ?? ''
  let lang: 'en' | 'es' = langHeader.startsWith('es') ? 'es' : 'en'
  let post = await fetchPost(slug, lang)
  if (!post && lang === 'es') {
    lang = 'en'
    post = await fetchPost(slug, lang)
  }
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
  const headersList = await headers()
  const langHeader = headersList.get('accept-language')?.toLowerCase() ?? ''
  let lang: 'en' | 'es' = langHeader.startsWith('es') ? 'es' : 'en'
  let post = await fetchPost(slug, lang)
  if (!post && lang === 'es') {
    lang = 'en'
    post = await fetchPost(slug, lang)
  }
  if (!post) notFound()
  const authorName = post.author_id ? await fetchAuthorName(post.author_id) : null
  const publishedDate = post.published_at
    ? new Date(post.published_at)
    : null
  const formattedDate = publishedDate
    ? publishedDate.toLocaleDateString(
      lang === 'es' ? 'es-ES' : 'en-US',
      { month: 'long', day: 'numeric', year: 'numeric' }
    )
    : null
  const postUrl = `${BASE_URL}/blog/${post.slug}`

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 lg:flex lg:gap-8">
      <article className="flex-1">
        <h1 className="font-heading text-3xl font-semibold text-text">{post.title}</h1>
        {post.excerpt && <p className="mt-2 text-muted">{post.excerpt}</p>}

        {post.cover_url && (
          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-md">
            <Image
              src={post.cover_url}
              alt={post.title?.trim() || 'Article cover image'}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        <article className="prose prose-neutral dark:prose-invert mt-8 max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {post.body_md ?? ''}
          </ReactMarkdown>
        </article>
      </article>

      <aside className="mt-8 lg:mt-0 lg:w-64 lg:flex-shrink-0">
        {formattedDate && <p className="text-sm text-muted">{formattedDate}</p>}
        {authorName && (
          <p className="mt-2 text-sm text-muted">Published by {authorName}</p>
        )}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase text-muted">Share this article</p>
          <ShareButtons url={postUrl} title={post.title} />
        </div>
      </aside>
    </main>
  )
}
