"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

type Post = {
  slug: string
  title: string
  excerpt: string
  readingMinutes: number
}

export default function LatestPosts() {
  const { t, lang } = useLanguage()
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/posts?lang=${lang}`)
        if (res.ok) {
          const { items } = await res.json()
          setPosts(items ?? [])
        }
      } catch {
        // ignore errors for now
      }
    }
    load()
  }, [lang])

  const firstTwo = posts.slice(0, 2)
  const rest = posts.slice(2)

  return (
    <section className="bg-bg py-14 mb-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 font-heading text-2xl font-semibold text-text">
          {t('latestPosts')}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {firstTwo.map(p => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft transition hover:border-mint/60"
            >
              <h3 className="text-lg font-semibold text-text group-hover:text-mint">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
              <span className="mt-4 inline-block text-sm text-mint">{t('readMore')}</span>
            </Link>
          ))}
        </div>
        {rest.length > 0 && (
          <div className="mt-6 space-y-6">
            {rest.map(p => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft transition hover:border-mint/60"
              >
                <h3 className="text-lg font-semibold text-text group-hover:text-mint">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
                <span className="mt-4 inline-block text-sm text-mint">{t('readMore')}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
