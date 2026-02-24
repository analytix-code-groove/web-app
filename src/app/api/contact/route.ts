// app/api/contact/route.ts
import { NextResponse } from 'next/server'

// Ensure Node runtime (not Edge)
export const runtime = 'nodejs'

// ─────────────────────────────────────────────
// Env helper (process.env only — no local files)
// ─────────────────────────────────────────────
function env(name: string, def?: string) {
  const v = process.env[name] ?? def
  if (v === undefined || v === null || String(v).trim() === '') {
    throw new Error(`Missing env: ${name}`)
  }
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
    params.html && params.html.trim() !== ''
      ? { contentType: 'HTML', content: params.html }
      : { contentType: 'Text', content: params.text ?? '' }

  const payload = {
    message: {
      subject: params.subject,
      body: bodyContent,
      toRecipients: [{ emailAddress: { address: params.to } }],
      replyTo: params.replyTo ? [{ emailAddress: { address: params.replyTo } }] : [],
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
// Utilities
// ─────────────────────────────────────────────
function escapeHtml(str: string) {
  return str.replace(/[&<>'"]/g, c =>
    c === '&' ? '&amp;'
    : c === '<' ? '&lt;'
    : c === '>' ? '&gt;'
    : c === '"' ? '&quot;'
    : '&#39;'
  )
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
        `<tr>
          <td style="padding:10px 16px;font-weight:600;color:#9CA3AF;font-size:13px;white-space:nowrap;vertical-align:top;">${f.label}</td>
          <td style="padding:10px 16px;color:#F3F4F6;font-size:14px;vertical-align:top;">${f.value}</td>
        </tr>`
    )
    .join('')

  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')
  const year = new Date().getFullYear()

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background-color:#0B0E11;font-family:'Segoe UI',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0E11;">
    <tr><td align="center" style="padding:24px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;background-color:#111418;">
        <!-- Cover -->
        <tr>
          <td style="padding:0;line-height:0;">
            <img src="https://analytixcg.com/images/email-cover.jpg" alt="Analytix Code Groove" width="600" style="display:block;width:100%;height:auto;" />
          </td>
        </tr>
        <!-- Title -->
        <tr>
          <td style="padding:28px 24px 4px 24px;">
            <h2 style="margin:0;font-size:20px;font-weight:600;color:#36E2B4;">Contact Form Submission</h2>
          </td>
        </tr>
        <!-- Fields -->
        <tr>
          <td style="padding:12px 8px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${rows}
            </table>
          </td>
        </tr>
        <!-- Divider -->
        <tr>
          <td style="padding:0 24px;">
            <hr style="border:none;border-top:1px solid #1F2937;margin:0;" />
          </td>
        </tr>
        <!-- Message -->
        <tr>
          <td style="padding:20px 24px 4px 24px;">
            <p style="margin:0;font-size:13px;font-weight:600;color:#9CA3AF;">Message</p>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 24px 28px 24px;">
            <p style="margin:0;font-size:14px;line-height:1.6;color:#F3F4F6;">${safeMessage}</p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 24px;background-color:#0B0E11;text-align:center;border-top:1px solid #1F2937;">
            <p style="margin:0;font-size:12px;color:#6B7280;">
              &copy; ${year} Analytix Code Groove &bull;
              <a href="https://analytixcg.com" style="color:#36E2B4;text-decoration:none;">analytixcg.com</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

  return { text, html }
}

// ─────────────────────────────────────────────
// Handler
// ─────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const { name = '', email = '', reason = 'general', message = '', website = '' } = await req.json()

    // Honeypot: real users never fill this hidden field
    if (website) {
      // Return 200 so bots think it succeeded
      return NextResponse.json({ success: true })
    }

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
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
