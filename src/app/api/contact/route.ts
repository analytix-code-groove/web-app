import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'node:fs'
import path from 'node:path'

export const runtime = 'nodejs' // ensure Node runtime for nodemailer

let localEnv: Record<string, unknown> | null = null

function loadLocalEnv() {
  if (localEnv) return localEnv
  try {
    const file = fs.readFileSync(
      path.join(process.cwd(), 'supabase.local.json'),
      'utf-8',
    )
    localEnv = JSON.parse(file)
  } catch {
    localEnv = {}
  }
  return localEnv
}

function env(name: string) {
  const v = process.env[name] ?? (loadLocalEnv() as Record<string, unknown>)[name]
  if (v === undefined || v === null)
    throw new Error(`Missing env: ${name}`)
  return String(v)
}

// Hardcoded recipients
const EMAIL_TO_SUPPORT = 'support@analytixcg.com'
const EMAIL_TO_INFO = 'info@analytixcg.com'

export async function POST(req: Request) {
  try {
    const { name = '', email = '', reason = 'general', message = '' } = await req.json()

    const to = reason === 'support' ? EMAIL_TO_SUPPORT : EMAIL_TO_INFO

    const transporter = nodemailer.createTransport({
      host: env('SMTP_HOST'),
      port: Number(env('SMTP_PORT') || 587),
      secure: env('SMTP_SECURE') === 'true', // true only for 465
      auth: { user: env('SMTP_USER'), pass: env('SMTP_PASS') },
      requireTLS: true, // Office365 on 587 uses STARTTLS
    })

    await transporter.sendMail({
      from: env('SMTP_FROM'),
      to,
      subject:
        reason === 'support'
          ? `Support request from ${name || 'Website'}`
          : `Contact from ${name || 'Website'}`,
      text: `${message}\n\nFrom: ${name}${email ? ` <${email}>` : ''}`,
      replyTo: email || undefined,
      headers: { 'X-Source': 'website', 'X-Form': 'contact' },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error sending contact email', err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
