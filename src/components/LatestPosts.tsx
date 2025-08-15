"use client"

import Link from 'next/link'
import { posts } from '@/data/posts'
import { useLanguage } from '@/lib/i18n'

export default function LatestPosts() {
  const { t } = useLanguage()
  return (
    <section className="bg-bg py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 font-heading text-2xl font-semibold text-text">
          {t('latestPosts')}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.slice(0, 2).map(p => (
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
      </div>
    </section>
  )
}
