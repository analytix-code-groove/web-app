"use client"

import { useEffect, useState } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

type Post = {
  id: string
  title: string
  excerpt: string
}

export const metadata: Metadata = {
  title: 'Blog | AnalytiX',
  description: 'Insights on data engineering, cloud, and automation from the AnalytiX team.',
}

export default function BlogPage() {
  const { t } = useLanguage()
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch('/api/posts')
      .then(r => r.json())
      .then(data => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
  }, [])

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">{t('blog')}</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {posts.map(p => (
            <Link
              key={p.id}
              href={`/blog/${p.id}`}
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
