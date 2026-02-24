'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
      {/* Hero Banner */}
      <section className="relative isolate overflow-hidden py-32">
        <Image
          src="/images/blog_banner.jpg"
          alt=""
          fill
          aria-hidden
          className="pointer-events-none object-cover"
          sizes="100vw"
          priority
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,14,17,0.85) 0%, rgba(11,14,17,0.7) 50%, rgba(11,14,17,0.9) 100%)',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            {lang === 'en' ? (
              <>Our <span className="text-mint">Blog</span></>
            ) : (
              <>Nuestro <span className="text-mint">Blog</span></>
            )}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            {t('blogHeroSubtitle')}
          </p>
          {canCreate && (
            <div className="mt-6">
              <Link
                href="/blog/new"
                className="inline-block rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
              >
                {t('newPost')}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Posts */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4">
          {/* Featured post */}
          {firstPost && (
            <Link
              href={`/blog/${firstPost.slug}`}
              className="group block rounded-xl2 border border-stroke/70 bg-bg p-8 shadow-soft transition hover:border-mint/60"
            >
              <p className="text-xs text-muted">
                {firstPost.readingMinutes} {t('minRead')}
              </p>
              <h2 className="mt-2 font-heading text-2xl font-semibold text-text group-hover:text-mint">
                {firstPost.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{firstPost.excerpt}</p>
              <span className="mt-4 inline-block text-sm text-mint">{t('readMore')}</span>
            </Link>
          )}

          {/* Other posts grid */}
          {otherPosts.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {otherPosts.map(p => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft transition hover:border-mint/60"
                >
                  <p className="text-xs text-muted">
                    {p.readingMinutes} {t('minRead')}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-text group-hover:text-mint">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
                  <span className="mt-3 inline-block text-sm text-mint">{t('readMore')}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl font-semibold text-text sm:text-4xl">
            {t('aboutCtaHeading')}{' '}
            <span className="text-mint">{t('aboutCtaAccent')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            {t('aboutCtaSubtitle')}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow hover:opacity-90"
            >
              {t('letsTalk')}
            </Link>
            <Link
              href="/services"
              className="rounded-xl2 border border-stroke/80 px-5 py-2.5 text-sm text-text/90 hover:border-mint hover:text-text"
            >
              {t('seeServices')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
