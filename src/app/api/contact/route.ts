import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs' // ensure Node runtime for nodemailer

function env(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

export async function POST(req: Request) {
  try {
    const { name = '', email = '', reason = 'general', message = '' } = await req.json()

    const to =
      reason === 'support' ? env('EMAIL_TO_SUPPORT') : env('EMAIL_TO_INFO')

    const transporter = nodemailer.createTransport({
      host: env('SMTP_HOST'),
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true', // true only for 465
      auth: { user: env('SMTP_USER'), pass: env('SMTP_PASS') },
      requireTLS: true, // Office365 on 587 uses STARTTLS
    })

    await transporter.sendMail({
      from: `${env('EMAIL_FROM_NAME')} <${env('EMAIL_FROM_ADDRESS')}>`,
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
