// app/api/posts/route.ts
import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'
import { getUserFromRequest } from '@/lib/profile'

function slugify(str: string) {
  return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

// ---------- GET /api/posts ----------
// Public list of published posts with pagination and optional tag filter
export async function GET(req: Request) {
  const url = new URL(req.url)
  const page = Math.max(1, Number(url.searchParams.get('page') ?? '1'))
  const pageSize = Math.min(50, Math.max(1, Number(url.searchParams.get('pageSize') ?? '10')))
  const tag = url.searchParams.get('tag') // slug (e.g., "aws")

  const from = (page - 1) * pageSize
  const to = from + pageSize - 1

  const supabase = createSupabaseServerClient()

  // Base query
  let q = supabase
    .schema('content')
    .from('posts')
    .select(
      // be explicit about columns you expose
      'slug,title,excerpt,cover_url,published_at,author_id',
      { count: 'exact' }
    )
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .range(from, to)

  // Optional tag filter (via join table)
  if (tag) {
    // Filter posts that have the given tag slug
      q = q.in(
        'slug',
        supabase
          .schema('content')
          .from('vw_post_tags') // create a view (post_slug, tag_slug) or switch to rpc
          .select('post_slug')
          .eq('tag_slug', tag) as unknown as string[]
      )
  }

  const { data, error, count } = await q
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const res = NextResponse.json({
    items: data ?? [],
    page,
    pageSize,
    total: count ?? 0,
    totalPages: count ? Math.max(1, Math.ceil(count / pageSize)) : 1,
  })
  // Small public cache (tune to taste)
  res.headers.set('Cache-Control', 'public, max-age=30, s-maxage=60')
  return res
}

// ---------- POST /api/posts ----------
// Authenticated: authors/admins can create posts, link tags
export async function POST(req: Request) {
  const { supabase, user } = await getUserFromRequest(req)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: profile, error: profErr } = await supabase
    .schema('api')
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (profErr) return NextResponse.json({ error: profErr.message }, { status: 500 })
  if (!profile || (profile.role !== 'author' && profile.role !== 'admin')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // Parse body
  const body = await req.json()
  const {
    title,
    excerpt,
    body_md,
    cover_url,
    tags = [],
    status = 'draft',
    slug: slugInput,
  } = body ?? {}

  if (!title || !excerpt || !body_md) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const slug = slugInput ? slugify(String(slugInput)) : slugify(String(title))
  const now = new Date().toISOString()
  const published_at = status === 'published' ? now : null

  // Guard: unique slug (409)
  {
    const { data: existing, error: existErr } = await supabase
      .schema('content')
      .from('posts')
      .select('slug')
      .eq('slug', slug)
      .maybeSingle()

    if (existErr) return NextResponse.json({ error: existErr.message }, { status: 500 })
    if (existing) {
      return NextResponse.json({ error: 'Slug already exists', slug }, { status: 409 })
    }
  }

  // Insert post
  const { data: inserted, error: insErr } = await supabase
    .schema('content')
    .from('posts')
    .insert({
      slug,
      title,
      excerpt,
      body_md,
      cover_url,
      author_id: user.id,
      status,
      published_at,
    })
    .select('slug,title,excerpt,cover_url,published_at,author_id,status')
    .single()

  if (insErr) {
    if (insErr.message?.includes('row-level security')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    return NextResponse.json({ error: insErr.message }, { status: 500 })
  }

  // Tags (idempotent)
  if (Array.isArray(tags) && tags.length > 0) {
    const tagRecords = tags
      .map((n: string) => String(n).trim())
      .filter(Boolean)
      .map((name: string) => ({ slug: slugify(name), name }))

    const { error: tagUpsertErr } = await supabase
      .schema('content')
      .from('tags')
      .upsert(tagRecords, { onConflict: 'slug' })
    if (tagUpsertErr) return NextResponse.json({ error: tagUpsertErr.message }, { status: 500 })

    const tagSlugs = tagRecords.map(t => t.slug)
    const { data: rows, error: tagFetchErr } = await supabase
      .schema('content')
      .from('tags')
      .select('id,slug')
      .in('slug', tagSlugs)

    if (tagFetchErr || !rows) {
      return NextResponse.json(
        { error: tagFetchErr?.message ?? 'Tag fetch failed' },
        { status: 500 }
      )
    }

    // Ensure (post_slug, tag_id) has a unique constraint; use upsert to avoid dupes
    const postTags = rows.map(r => ({ post_slug: inserted.slug, tag_id: r.id }))
      const { error: linkErr } = await supabase
        .schema('content')
        .from('post_tags')
        .upsert(postTags, { onConflict: 'post_slug,tag_id', ignoreDuplicates: true } as unknown)

    if (linkErr) return NextResponse.json({ error: linkErr.message }, { status: 500 })
  }

  return NextResponse.json(inserted, { status: 201 })
}
