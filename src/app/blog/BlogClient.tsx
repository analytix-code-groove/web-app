'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/i18n'
import { createSupabaseBrowserClient } from '@/lib/supabase'
import { getCurrentUser } from '@/lib/profile'

type Post = {
  slug: string
  title: string
  excerpt: string
}

export default function BlogClient() {
  const { t } = useLanguage()
  const [posts, setPosts] = useState<Post[]>([])
  const [canCreate, setCanCreate] = useState(false)
  const supabase = useMemo(() => createSupabaseBrowserClient(), [])
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/posts')
        if (res.ok) {
          setPosts(await res.json())
        }
          const user = await getCurrentUser(supabase)
          if (user) {
          const { data } = await supabase
            .from('profiles', { schema: 'api' })
            .select('role')
            .eq('id', user.id)
            .single()
          if (data && (data.role === 'author' || data.role === 'admin')) {
            setCanCreate(true)
          }
        }
      } catch {
        // ignore errors for now
      }
    }
    load()
  }, [supabase])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const slug = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      const res = await fetch('/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, title, excerpt, body_md: body }),
      })
      if (res.ok) {
        router.push(`/blog/${slug}`)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">{t('blog')}</h1>
        {canCreate && (
          <section className="mt-8">
            <h2 className="font-heading text-xl font-semibold text-text">New Post</h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm text-muted" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="mt-1 w-full rounded-md border border-stroke bg-surface px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted" htmlFor="excerpt">
                  Excerpt
                </label>
                <textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={e => setExcerpt(e.target.value)}
                  className="mt-1 w-full rounded-md border border-stroke bg-surface px-3 py-2"
                  rows={2}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted" htmlFor="body">
                  Body (Markdown)
                </label>
                <textarea
                  id="body"
                  value={body}
                  onChange={e => setBody(e.target.value)}
                  className="mt-1 w-full rounded-md border border-stroke bg-surface px-3 py-2"
                  rows={6}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="rounded-md bg-mint px-4 py-2 font-semibold text-bg hover:bg-mint-strong disabled:opacity-50"
              >
                {loading ? 'Publishing...' : 'Publish'}
              </button>
            </form>
          </section>
        )}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {posts.map(p => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-xl2 border border-stroke/70 bg-surface p-6 transition hover:border-mint/60"
            >
              <h3 className="font-heading text-text">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
              <span className="mt-3 block text-sm text-mint">{t('readMore')}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
