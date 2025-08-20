// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import fs from 'node:fs'
import path from 'node:path'

export const runtime = 'nodejs'

// ─────────────────────────────────────────────
// Local env loader (prefers supabase.local.json)
// ─────────────────────────────────────────────
let localEnv: Record<string, string> | null = null
function loadLocalEnv() {
  if (localEnv) return localEnv
  try {
    const file = fs.readFileSync(path.join(process.cwd(), 'supabase.local.json'), 'utf8')
    localEnv = JSON.parse(file) as Record<string, string>
  } catch {
    localEnv = {}
  }
  return localEnv
}
function env(name: string, def?: string) {
  const v = (loadLocalEnv()[name] ?? process.env[name] ?? def)
  if (v === undefined || v === null) throw new Error(`Missing env: ${name}`)
  return String(v).trim()
}

// ─────────────────────────────────────────────
// Config
// ─────────────────────────────────────────────
const EMAIL_TO_SUPPORT = 'support@analytixcg.com'
const EMAIL_TO_INFO = 'info@analytixcg.com'

// From can be "Display <mail@domain>"
const FROM_DISPLAY = env('SMTP_FROM') // e.g. "Analytix Code Groove <info@analytixcg.com>"
const FROM_ADDRESS = (() => {
  const m = FROM_DISPLAY.match(/<\s*([^>]+)\s*>/)
  return (m ? m[1] : FROM_DISPLAY).toLowerCase()
})()

const TENANT_ID = env('AZURE_TENANT_ID')
const CLIENT_ID = env('AZURE_CLIENT_ID')
const CLIENT_SECRET = env('AZURE_CLIENT_SECRET')

// ─────────────────────────────────────────────
// Token (app-only) with a tiny in-memory cache
// ─────────────────────────────────────────────
let tokenCache: { accessToken: string; exp: number } | null = null

async function getGraphToken(): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  if (tokenCache && tokenCache.exp - 60 > now) return tokenCache.accessToken

  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  })
  const r = await fetch(`https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  if (!r.ok) throw new Error(`Token error ${r.status}: ${await r.text()}`)
  const j = (await r.json()) as { access_token?: string; expires_in?: number }
  if (!j.access_token) throw new Error('No access_token from Graph')
  tokenCache = { accessToken: j.access_token, exp: now + (j.expires_in ?? 3600) }
  return j.access_token
}

// ─────────────────────────────────────────────
// Graph sendMail helper (Text or HTML)
// ─────────────────────────────────────────────
async function graphSendMail(params: {
  from: string
  to: string
  subject: string
  text?: string
  html?: string
  replyTo?: string
}) {
  const token = await getGraphToken()

  const bodyContent =
    params.html != null && params.html.trim() !== ''
      ? { contentType: 'HTML', content: params.html }
      : { contentType: 'Text', content: params.text ?? '' }

  const payload = {
    message: {
      subject: params.subject,
      body: bodyContent,
      toRecipients: [{ emailAddress: { address: params.to } }],
      replyTo: params.replyTo ? [{ emailAddress: { address: params.replyTo } }] : [],
      // From is implied by calling /users/{from}/sendMail
    },
    saveToSentItems: true,
  }

  const resp = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(params.from)}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  )

  if (!resp.ok) {
    const errText = await resp.text()
    throw new Error(`Graph sendMail failed ${resp.status}: ${errText}`)
  }
}

// ─────────────────────────────────────────────
// Handler
// ─────────────────────────────────────────────
function escapeHtml(str: string) {
  return str.replace(/[&<>'"]/g, c => {
    switch (c) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case "'":
        return '&#39;'
      default:
        return c
    }
  })
}

function formatContactEmail(
  name: string,
  email: string,
  reason: string,
  message: string
): { text: string; html: string } {
  const fields = [
    { label: 'Name', value: name },
    { label: 'Email', value: email },
    { label: 'Reason', value: reason },
  ]

  const text = [
    'Contact Form Submission',
    ...fields.map(f => `${f.label}: ${f.value || 'N/A'}`),
    '',
    'Message:',
    message,
  ].join('\n')

  const safeFields = fields.map(f => ({ label: f.label, value: escapeHtml(f.value) || 'N/A' }))
  const rows = safeFields
    .map(
      f =>
        `<tr><td style="padding:4px 8px;font-weight:bold;">${f.label}:</td><td style="padding:4px 8px;">${f.value}</td></tr>`
    )
    .join('')

  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')
  const year = new Date().getFullYear()

  const html = [
    '<!DOCTYPE html>',
    '<html>',
    '  <body style="font-family:Arial,sans-serif;line-height:1.5;max-width:600px;margin:auto;">',
    '    <header style="text-align:center;margin-bottom:20px;">',
    '      <img src="https://analytixcg.com/images/logos/desktop/logo_navbar.png" alt="Analytix Code Groove" style="height:40px" />',
    '    </header>',
    '    <h2 style="margin:0 0 16px 0;">Contact Form Submission</h2>',
    `    <table style="border-collapse:collapse;width:100%;margin-bottom:16px;">${rows}</table>`,
    '    <p style="margin:0 0 8px 0;"><strong>Message:</strong></p>',
    `    <p>${safeMessage}</p>`,
    '    <footer style="margin-top:32px;font-size:12px;color:#666;text-align:center;border-top:1px solid #eee;padding-top:12px;">',
    `      © ${year} Analytix Code Groove • <a href="https://analytixcg.com" style="color:#666;text-decoration:none;">analytixcg.com</a>`,
    '    </footer>',
    '  </body>',
    '</html>',
  ].join('\n')

  return { text, html }
}

export async function POST(req: Request) {
  try {
    const { name = '', email = '', reason = 'general', message = '' } = await req.json()
    const to = reason === 'support' ? EMAIL_TO_SUPPORT : EMAIL_TO_INFO

    const subject =
      reason === 'support'
        ? `Support request from ${name || 'Website'}`
        : `Contact from ${name || 'Website'}`

    const { text, html } = formatContactEmail(name, email, reason, message)

    await graphSendMail({
      from: FROM_ADDRESS,
      to,
      subject,
      text,
      html,
      replyTo: email || undefined,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error sending contact email', err)
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    )
  }
}
