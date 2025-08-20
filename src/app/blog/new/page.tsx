'use client'

import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { createSupabaseBrowserClient } from '@/lib/supabase'
import { getCurrentUser } from '@/lib/profile'

export default function NewPostPage() {
  const router = useRouter()
  const supabase = createSupabaseBrowserClient()
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [body, setBody] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [tags, setTags] = useState('')
  const [preview, setPreview] = useState(false)
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const tagList = tags
    .split(',')
    .map(t => t.trim())
    .filter(Boolean)

  useEffect(() => {
    async function verify() {
      const user = await getCurrentUser(supabase)
      if (!user) {
        router.push('/blog')
        return
      }
      const { data } = await supabase
        .schema('api')
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()
      if (!data || (data.role !== 'author' && data.role !== 'admin')) {
        router.push('/blog')
      }
    }
    verify()
  }, [supabase, router])

  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile)
      setImagePreview(url)
      return () => URL.revokeObjectURL(url)
    }
    setImagePreview(null)
  }, [imageFile])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      let cover_url: string | undefined
      if (imageFile) {
        const user = await getCurrentUser(supabase)
        if (!user) throw new Error('Not authenticated')
        const filePath = `${user.id}/${Date.now()}-${imageFile.name}`
        const { error: uploadError } = await supabase.storage
          .from('posts')
          .upload(filePath, imageFile, { upsert: true })
        if (uploadError) throw uploadError
        const {
          data: { publicUrl },
        } = supabase.storage.from('posts').getPublicUrl(filePath)
        cover_url = publicUrl
      }
      const slug = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
        const res = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            slug,
            title,
            excerpt,
            body_md: body,
            cover_url,
            tags: tagList,
            status: 'published',
          }),
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
          <label className="block text-sm text-muted" htmlFor="tags">
            Tags (comma separated)
          </label>
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={e => setTags(e.target.value)}
            className="mt-1 w-full rounded-md border border-stroke bg-surface px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-muted" htmlFor="body">
            Body (Markdown)
          </label>
          <p className="mt-1 text-xs text-muted">
            Use Markdown for formatting. Start headings with <code>#</code> or <code>##</code>, make text <code>**bold**</code> or <code>*italic*</code>, and embed images with <code>![alt](url)</code>.
          </p>
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
              <h2 className="font-heading text-2xl font-semibold text-text">{title}</h2>
              {imagePreview && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imagePreview} alt="preview" className="mt-4 rounded" />
              )}
              <p className="mt-4 text-muted">{excerpt}</p>
              <div className="mt-4 prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {body}
                </ReactMarkdown>
              </div>
              {tagList.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tagList.map(t => (
                    <li key={t} className="rounded bg-stroke px-2 py-1 text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
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

