import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'
import { getUserFromRequest } from '@/lib/profile'

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

  const body = await req.json()
  const post = {
    ...body,
    author_id: user.id,
    status: body.status ?? 'draft',
  }

  const { data, error } = await supabase
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

  return NextResponse.json(data, { status: 201 })
}
