'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { createSupabaseBrowserClient } from '@/lib/supabase'

export default function NewPostPage() {
  const router = useRouter()
  const supabase = createSupabaseBrowserClient()
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [body, setBody] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [preview, setPreview] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      let image_url: string | undefined
      if (imageFile) {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        if (!user) throw new Error('Not authenticated')
        const filePath = `${user.id}/${Date.now()}-${imageFile.name}`
        const { error: uploadError } = await supabase.storage
          .from('posts')
          .upload(filePath, imageFile, { upsert: true })
        if (uploadError) throw uploadError
        const {
          data: { publicUrl },
        } = supabase.storage.from('posts').getPublicUrl(filePath)
        image_url = publicUrl
      }
      const slug = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      const res = await fetch('/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, title, excerpt, body_md: body, image_url }),
      })
      if (res.ok) {
        router.push(`/blog/${slug}`)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-3xl font-semibold text-text">New Post</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label className="block text-sm text-muted" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="mt-1 w-full rounded-md border border-stroke bg-surface px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-muted" htmlFor="excerpt">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={e => setExcerpt(e.target.value)}
            className="mt-1 w-full rounded-md border border-stroke bg-surface px-3 py-2"
            rows={2}
            required
          />
        </div>
        <div>
          <label className="block text-sm text-muted" htmlFor="body">
            Body (Markdown)
          </label>
          <textarea
            id="body"
            value={body}
            onChange={e => setBody(e.target.value)}
            className="mt-1 w-full rounded-md border border-stroke bg-surface px-3 py-2"
            rows={10}
            required
          />
          <button
            type="button"
            onClick={() => setPreview(p => !p)}
            className="mt-2 text-sm text-mint"
          >
            {preview ? 'Hide preview' : 'Show preview'}
          </button>
          {preview && (
            <div className="mt-2 rounded-md border border-stroke bg-surface p-4">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm text-muted" htmlFor="image">
            Image (optional)
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={e => setImageFile(e.target.files?.[0] ?? null)}
            className="mt-1 block w-full text-sm text-muted file:mr-4 file:rounded-md file:border-0 file:bg-mint file:px-4 file:py-2 file:text-sm file:font-semibold file:text-bg hover:file:bg-mint-strong"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-mint px-4 py-2 font-semibold text-bg hover:bg-mint-strong disabled:opacity-50"
        >
          {loading ? 'Publishing...' : 'Publish'}
        </button>
      </form>
    </main>
  )
}

