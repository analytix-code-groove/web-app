// app/api/posts/route.ts
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { getUserFromRequest } from '@/lib/profile'
import { createSupabaseServerClient } from '@/lib/supabase'

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const lang = searchParams.get('lang') ?? 'en'
    const supabase = createSupabaseServerClient()
    const { data, error } = await supabase
      .schema('content')
      .from('posts')
      .select('slug,cover_url,published_at,post_translations!inner(language_code,title,excerpt)')
      .eq('status', 'published')
      .eq('post_translations.language_code', lang)
      .order('published_at', { ascending: false })
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    type Row = {
      slug: string
      cover_url: string | null
      published_at: string | null
      post_translations: { title: string; excerpt: string | null }
    }
    const rows = (data ?? []) as Row[]
    const items = rows.map(p => ({
      slug: p.slug,
      title: p.post_translations.title,
      excerpt: p.post_translations.excerpt,
      cover_url: p.cover_url,
      published_at: p.published_at,
    }))
    return NextResponse.json({ items })
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unexpected error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { supabase, user } = await getUserFromRequest(req)
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    // App-level role guard gives clearer errors than raw RLS failures
    const { data: profile, error: profErr } = await supabase
      .schema('api')
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()
    if (profErr) return NextResponse.json({ error: profErr.message }, { status: 500 })
    if (!profile || (profile.role !== 'author' && profile.role !== 'admin')) {
      return NextResponse.json({ error: 'Forbidden (not author/admin)' }, { status: 403 })
    }

    const body = await req.json().catch(() => null)
    if (!body) return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })

    const { lang = 'en', title, excerpt, body_md, cover_url, tags = [], status = 'draft', slug: slugInput } = body
    if (!title || !excerpt || !body_md) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const slug = slugify(String(slugInput ?? title))
    const now = new Date().toISOString()
    const published_at = status === 'published' ? now : null

    const { data: post, error: insErr } = await supabase
      .schema('content')
      .from('posts')
      .insert({
        slug,
        cover_url,
        author_id: user.id,
        status,
        published_at,
      })
      .select('slug,cover_url,published_at,author_id,status')
      .single()

    if (insErr) {
      console.error('[POST /api/posts] insert error:', insErr)
      if (insErr.code === '23505') {
        return NextResponse.json({ error: 'Slug already exists', slug }, { status: 409 })
      }
      if (insErr.message?.toLowerCase().includes('row-level security')) {
        return NextResponse.json({ error: 'Forbidden (RLS)' }, { status: 403 })
      }
      return NextResponse.json({ error: insErr.message ?? 'Insert failed' }, { status: 500 })
    }

    const { error: transErr } = await supabase
      .schema('content')
      .from('post_translations')
      .insert({
        post_slug: slug,
        language_code: lang,
        title,
        excerpt,
        body_md,
      })
    if (transErr) {
      return NextResponse.json({ error: transErr.message }, { status: 500 })
    }

    const inserted = {
      ...post,
      title,
      excerpt,
    }

    // Tags
    if (Array.isArray(tags) && tags.length > 0) {
      const norm = (n: string) => ({ slug: slugify(n), name: n.trim() })
      const tagRecords = tags.map(String).map(norm).filter(t => t.name)

      const { error: upErr } = await supabase
        .schema('content')
        .from('tags')
        .upsert(tagRecords, { onConflict: 'slug' })
      if (upErr) return NextResponse.json({ error: upErr.message }, { status: 500 })

      const { data: rows, error: fetchErr } = await supabase
        .schema('content')
        .from('tags')
        .select('id,slug')
        .in('slug', tagRecords.map(t => t.slug))
      if (fetchErr || !rows) {
        return NextResponse.json({ error: fetchErr?.message ?? 'Tag fetch failed' }, { status: 500 })
      }

      const links = rows.map(r => ({ post_slug: post.slug, tag_id: r.id }))
      // Upsert is fine; you don't need ignoreDuplicates here
      const { error: linkErr } = await supabase
        .schema('content')
        .from('post_tags')
        .upsert(links, { onConflict: 'post_slug,tag_id' })
      if (linkErr) return NextResponse.json({ error: linkErr.message }, { status: 500 })
    }

    return NextResponse.json(inserted, { status: 201 })
  } catch (e) {
    console.error('[POST /api/posts] unhandled:', e)
    const message = e instanceof Error ? e.message : 'Unexpected error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
