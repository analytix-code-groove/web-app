import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'

// GET /api/posts/[slug] - return a single post by slug
export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 })
  }

  return NextResponse.json(data)
}
