'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

type Post = {
  slug: string
  title: string
  excerpt: string
}

export default function BlogClient() {
  const { t } = useLanguage()
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/posts')
        if (res.ok) {
          setPosts(await res.json())
        }
      } catch {
        // ignore errors for now
      }
    }
    load()
  }, [])

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">{t('blog')}</h1>
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
