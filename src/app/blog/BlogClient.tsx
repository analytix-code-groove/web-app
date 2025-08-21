'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import { createSupabaseBrowserClient } from '@/lib/supabase'
import { getCurrentUser } from '@/lib/profile'

type Post = {
  slug: string
  title: string
  excerpt: string
  readingMinutes: number
}

export default function BlogClient() {
  const { t, lang } = useLanguage()
  const [posts, setPosts] = useState<Post[]>([])
  const [canCreate, setCanCreate] = useState(false)
  const supabase = useMemo(() => createSupabaseBrowserClient(), [])

  useEffect(() => {
      async function load() {
        try {
          const res = await fetch(`/api/posts?lang=${lang}`)
          if (res.ok) {
            const { items } = await res.json()
            setPosts(items ?? [])
          }
          const user = await getCurrentUser(supabase)
          if (user) {
            const { data } = await supabase
              .schema('api')
              .from('profiles')
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
  }, [supabase, lang])

  const [firstPost, ...otherPosts] = posts

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">{t('blog')}</h1>
        {canCreate && (
          <div className="mt-8">
            <Link
              href="/blog/new"
              className="inline-block rounded-md bg-mint px-4 py-2 font-semibold text-bg hover:bg-mint-strong"
            >
              New Post
            </Link>
          </div>
        )}
        <div className="mt-8 space-y-8">
          {firstPost && (
            <Link
              key={firstPost.slug}
              href={`/blog/${firstPost.slug}`}
              className="block rounded-xl2 border border-stroke/70 bg-surface p-8 shadow-soft transition hover:border-mint/60"
            >
              <h2 className="text-2xl font-semibold text-text">{firstPost.title}</h2>
              <p className="mt-1 text-xs text-muted">
                {firstPost.readingMinutes} {t('minRead')}
              </p>
              <p className="mt-2 text-sm text-muted">{firstPost.excerpt}</p>
              <span className="mt-4 inline-block text-sm text-mint">{t('readMore')}</span>
            </Link>
          )}
          {otherPosts.length > 0 && (
            <div className="space-y-6">
              {otherPosts.map(p => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block rounded-xl2 border border-stroke/70 bg-surface p-6 transition hover:border-mint/60"
                >
                  <h3 className="font-heading text-text">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted">{p.readingMinutes} {t('minRead')}</p>
                  <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
                  <span className="mt-3 block text-sm text-mint">{t('readMore')}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
