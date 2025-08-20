import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'

// GET /api/posts/[slug] - return a single post by slug
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(_req: Request, context: any) {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', context.params.slug)
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 })
  }

  return NextResponse.json(data)
}
