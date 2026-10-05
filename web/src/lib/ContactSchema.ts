import z from 'zod'

const primaryGoals = ['Weight Loss', 'Muscle Gain', 'Overall Health'] as const

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(50, "Name can't be more than 50 characters."),
  email: z.email(),
  primaryGoal: z.enum(primaryGoals, {
    error: 'Please choose a primary goal',
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, "Message can't be more than 500 characters"),
  // Honeypot: hidden from people, so only bots fill it in
  website: z.string().optional(),
})

export type ContactValues = z.infer<typeof contactSchema>
