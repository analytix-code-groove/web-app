import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'
import { getUserFromRequest } from '@/lib/profile'

function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// GET /api/posts - public: list all published posts
export async function GET() {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .schema('content')
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

// POST /api/posts - authenticated authors/admins
export async function POST(req: Request) {
  const { supabase, user } = await getUserFromRequest(req)
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: profile } = await supabase
    .schema('api')
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()
  if (!profile || (profile.role !== 'author' && profile.role !== 'admin')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await req.json()
  const { tags = [], ...rest } = body
  const post = {
    ...rest,
    author_id: user.id,
    status: body.status ?? 'draft',
  }

  const { data: inserted, error } = await supabase
    .schema('content')
    .from('posts')
    .insert(post)
    .select()
    .single()

  if (error) {
    // Optionally normalize RLS error into 403
    if (error.message.includes('row-level security')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (tags.length > 0) {
    const tagRecords = tags.map((name: string) => ({
      slug: slugify(name),
      name,
    }))
    const tagSlugs = tagRecords.map(t => t.slug)
    const { error: tagErr } = await supabase
      .schema('content')
      .from('tags')
      .upsert(tagRecords, { onConflict: 'slug' })
    if (tagErr) {
      return NextResponse.json({ error: tagErr.message }, { status: 500 })
    }
    const { data: rows, error: fetchErr } = await supabase
      .schema('content')
      .from('tags')
      .select('id, slug')
      .in('slug', tagSlugs)
    if (fetchErr || !rows) {
      return NextResponse.json({ error: fetchErr?.message ?? 'Tag fetch failed' }, { status: 500 })
    }
    const postTags = rows.map(r => ({ post_slug: inserted.slug, tag_id: r.id }))
    const { error: linkErr } = await supabase
      .schema('content')
      .from('post_tags')
      .insert(postTags)
    if (linkErr) {
      return NextResponse.json({ error: linkErr.message }, { status: 500 })
    }
  }

  return NextResponse.json(inserted, { status: 201 })
}
