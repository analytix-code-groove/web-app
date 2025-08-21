// app/api/posts/[slug]/route.ts
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'

type Ctx = { params: Promise<{ slug: string }> }

export async function GET(req: Request, ctx: Ctx) {
  const { slug } = await ctx.params
  const { searchParams } = new URL(req.url)
  const lang = searchParams.get('lang') ?? 'en'

  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .schema('content')
    .from('posts')
    .select('slug,cover_url,published_at,author_id,status,post_translations!inner(language_code,title,excerpt,body_md)')
    .eq('slug', slug)
    .eq('status', 'published')
    .eq('post_translations.language_code', lang)
    .single()

  if (error) {
    const status = error.code === 'PGRST116' ? 404 : 500
    return NextResponse.json({ error: error.message }, { status })
  }

  type Row = {
    slug: string
    cover_url: string | null
    published_at: string | null
    author_id: string | null
    status: string
    post_translations: {
      title: string
      excerpt: string | null
      body_md: string | null
    }[]
  }
  const row = data as Row
  const tr = row.post_translations[0]
  return NextResponse.json({
    slug: row.slug,
    cover_url: row.cover_url,
    published_at: row.published_at,
    author_id: row.author_id,
    status: row.status,
    title: tr?.title,
    excerpt: tr?.excerpt,
    body_md: tr?.body_md,
  })
}
