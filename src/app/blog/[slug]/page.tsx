// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import GithubSlugger from 'github-slugger'
import ShareButtons from '@/components/ShareButtons'
import { headers, cookies } from 'next/headers'
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
  const cookieStore = await cookies()
  const cookieLang = cookieStore.get('lang')?.value
  const headersList = await headers()
  const langHeader = headersList.get('accept-language')?.toLowerCase() ?? ''
  let lang: 'en' | 'es' =
    cookieLang === 'es' || cookieLang === 'en'
      ? cookieLang
      : langHeader.startsWith('es')
        ? 'es'
        : 'en'
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
  const cookieStore = await cookies()
  const cookieLang = cookieStore.get('lang')?.value
  const headersList = await headers()
  const langHeader = headersList.get('accept-language')?.toLowerCase() ?? ''
  let lang: 'en' | 'es' =
    cookieLang === 'es' || cookieLang === 'en'
      ? cookieLang
      : langHeader.startsWith('es')
        ? 'es'
        : 'en'
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
  const bodyMd = post.body_md ?? ''
  const wordCount = bodyMd.trim() ? bodyMd.trim().split(/\s+/).length : 0
  const readingMinutes = wordCount ? Math.max(1, Math.ceil(wordCount / 200)) : null

  const slugger = new GithubSlugger()
  slugger.reset()
  const headings = bodyMd
    .split('\n')
    .map(line => {
      const match = line.match(/^(#{1,6})\s+(.*)$/)
      if (!match) return null
      const level = match[1].length
      if (level === 1) return null
      const raw = match[2]?.trim().replace(/#+\s*$/, '').trim()
      if (!raw) return null
      const text = raw.replace(/\[(.*?)\]\(.*?\)/g, '$1').replace(/[\*_`]/g, '').trim()
      if (!text) return null
      const slug = slugger.slug(text)
      return { level, text, slug }
    })
    .filter((item): item is { level: number; text: string; slug: string } => Boolean(item))

  const markdownComponents: Components = {
    a({ href, ...props }) {
      const isExternal = href ? /^(?:[a-z]+:)?\/\//i.test(href) : false
      return (
        <a
          href={href ?? '#'}
          className="font-medium text-primary hover:underline"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...props}
        />
      )
    },
    pre({ className, ...props }) {
      return (
        <pre
          className={`mt-4 overflow-x-auto rounded-md bg-muted/60 p-4 text-sm ${className ?? ''}`.trim()}
          {...props}
        />
      )
    },
    code({ className, children, ...props }) {
      const isInline = !className
      if (isInline) {
        return (
          <code className="rounded bg-muted px-1 py-0.5 text-sm" {...props}>
            {children}
          </code>
        )
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
    img({ src, alt, title }) {
      if (!src) return null
      const imageAlt = alt || title || 'Article image'
      return (
        <span className="mx-auto my-6 block text-center">
          <span className="block overflow-hidden rounded-md shadow-sm">
            <Image
              src={src}
              alt={imageAlt}
              width={960}
              height={540}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </span>
          {title && <span className="mt-2 block text-xs text-muted">{title}</span>}
        </span>
      )
    },
    blockquote({ className, ...props }) {
      return (
        <blockquote
          className={`border-l-4 border-primary/40 pl-4 italic text-muted ${className ?? ''}`.trim()}
          {...props}
        />
      )
    },
  }

  const headingIndent: Record<number, string> = {
    2: '',
    3: 'pl-3',
    4: 'pl-6',
    5: 'pl-9',
    6: 'pl-12',
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 lg:flex lg:gap-12">
      <article className="flex-1">
        <h1 className="font-heading text-3xl font-semibold text-text">{post.title}</h1>
        {post.excerpt && <p className="mt-3 text-lg text-muted">{post.excerpt}</p>}

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          {formattedDate && (
            <time dateTime={publishedDate?.toISOString()}>{formattedDate}</time>
          )}
          {readingMinutes && (
            <span>{readingMinutes} min read</span>
          )}
          {authorName && <span>By {authorName}</span>}
        </div>

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
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
            components={markdownComponents}
          >
            {bodyMd}
          </ReactMarkdown>
        </article>
      </article>

      <aside className="mt-12 flex flex-col gap-10 lg:mt-0 lg:w-64 lg:flex-shrink-0">
        <section>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Article details</p>
          <div className="mt-3 space-y-2 text-sm text-muted">
            {formattedDate && (
              <p>
                Published <time dateTime={publishedDate?.toISOString()}>{formattedDate}</time>
              </p>
            )}
            {authorName && <p>Written by {authorName}</p>}
          </div>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Share this article</p>
          <ShareButtons url={postUrl} title={post.title} />
        </section>

        {headings.length > 0 && (
          <section>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              {lang === 'es' ? 'En esta página' : 'On this page'}
            </p>
            <nav className="mt-3">
              <ul className="space-y-2 text-sm text-muted">
                {headings.map(heading => (
                  <li key={heading.slug} className={headingIndent[heading.level] ?? 'pl-12'}>
                    <a
                      href={`#${heading.slug}`}
                      className="block rounded-sm border-l border-border/60 pl-3 transition-colors hover:border-primary/80 hover:text-primary"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        )}
      </aside>
    </main>
  )
}
