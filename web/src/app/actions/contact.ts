'use server'

import { Resend } from 'resend'
import { contactSchema } from '@/lib/ContactSchema'

export type ContactResult = { success: true } | { success: false; error: string }

export async function sendContactMessage(input: unknown): Promise<ContactResult> {
  // Never trust the browser: validate again on the server
  const parsed = contactSchema.safeParse(input)
  if (!parsed.success) {
    return { success: false, error: 'Please check the form and try again.' }
  }

  const { name, email, primaryGoal, message, website } = parsed.data

  // Honeypot filled in: pretend it worked so bots learn nothing
  if (website) return { success: true }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !to || !from) {
    console.error('Contact form: missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL')
    return { success: false, error: 'Messages are unavailable right now. Please try again later.' }
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New consultation request from ${name.replace(/[\r\n]+/g, ' ')}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Primary goal: ${primaryGoal}`,
      '',
      'Message:',
      message,
    ].join('\n'),
  })

  if (error) {
    console.error('Contact form: Resend error', error)
    return { success: false, error: 'Something went wrong sending your message. Please try again.' }
  }

  return { success: true }
}
