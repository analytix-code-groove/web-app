import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, reason, message } = await req.json()
    const to = reason === 'support' ? 'support@analytixcg.com' : 'info@analytixcg.com'
    const subject = reason === 'support' ? `Support request from ${name}` : `Contact from ${name}`
    const text = `${message}\n\nFrom: ${name}${email ? ` <${email}>` : ''}`

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      text,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error sending contact email', err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

