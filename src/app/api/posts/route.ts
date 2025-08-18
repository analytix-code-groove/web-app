import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'

// GET /api/posts - return all posts
export async function GET() {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false })
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data)
}

// POST /api/posts - create a new post
export async function POST(req: Request) {
  const supabase = createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { data: profile } = await supabase
    .from('profiles', { schema: 'api' })
    .select('role')
    .eq('id', user.id)
    .single()
  if (!profile || (profile.role !== 'author' && profile.role !== 'admin')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  const body = await req.json()
  const { data, error } = await supabase.from('posts').insert(body).select().single()
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data, { status: 201 })
}
