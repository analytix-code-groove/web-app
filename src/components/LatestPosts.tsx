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
          {posts.map(p => (
            <article key={p.slug} className="rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-text">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="mt-4 inline-block text-sm text-mint">
                {t('readMore')}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
