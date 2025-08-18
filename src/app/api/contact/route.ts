import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'node:fs'
import path from 'node:path'

export const runtime = 'nodejs' // ensure Node runtime for nodemailer

let localEnv: Record<string, string> | null = null

function loadLocalEnv() {
  if (localEnv) return localEnv
  try {
    const file = fs.readFileSync(
      path.join(process.cwd(), 'supabase.local.json'),
      'utf8',
    )
    localEnv = JSON.parse(file) as Record<string, string>
  } catch {
    localEnv = {}
  }
  return localEnv
}

function env(name: string, defaultValue?: string) {
  const localValue = loadLocalEnv()[name]
  const v = localValue ?? process.env[name] ?? defaultValue
  if (v === undefined || v === null)
    throw new Error(`Missing env: ${name}`)
  return String(v)
}

export async function POST(req: Request) {
  try {
    const { name = '', email = '', reason = 'general', message = '' } = await req.json()

    const to =
      reason === 'support' ? env('EMAIL_TO_SUPPORT') : env('EMAIL_TO_INFO')

    const transporter = nodemailer.createTransport({
      host: env('SMTP_HOST'),
      port: Number(env('SMTP_PORT', '587')),
      secure: env('SMTP_SECURE', 'false') === 'true', // true only for 465
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
      replyTo: email || undefined,       // <-- replies go to the visitor
      headers: { 'X-Source': 'website', 'X-Form': 'contact' },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error sending contact email', err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
