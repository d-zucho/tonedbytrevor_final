'use client'
import { Controller, useForm } from 'react-hook-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Field, FieldError, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useState } from 'react'
import { contactSchema, type ContactValues } from '@/lib/ContactSchema'
import { sendContactMessage } from '@/app/actions/contact'
import { toast } from './ui/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Spinner } from './ui/spinner'
import { ArrowRightIcon } from 'lucide-react'


const ContactForm = () => {
  
  const [loading, setLoading] = useState<boolean>(false)
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      primaryGoal: 'Overall Health',
      website: '',
    },
  })

  const onSubmit = async (values: ContactValues) => {
    setLoading(true)
    try {
      const result = await sendContactMessage(values)
      if (result.success) {
        toast.add({
          type: 'success',
          title: 'Message sent',
          description: "Thanks for reaching out. I'll get back to you soon.",
        })
        form.reset()
      } else {
        toast.add({ type: 'error', title: "Couldn't send message", description: result.error })
      }
    } catch {
      toast.add({
        type: 'error',
        title: "Couldn't send message",
        description: 'Something went wrong. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className='max-w-sm mx-auto bg-card-bg'>
      <CardHeader>
        <CardTitle className='text-xl'>Get In Touch</CardTitle>
        <CardDescription className='text-my-off-white'>
          Let&apos;s schedule a free consultation
        </CardDescription>
      </CardHeader>
      <CardContent>
        
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-6 items-start'
          >
            {/* Name */}
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input
                    id={field.name}
                    placeholder='Enter your name...'
                    type='text'
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    id={field.name}
                    placeholder='johnny@example.com'
                    type='email'
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Primary Goal */}
            <Controller
              name='primaryGoal'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Primary Goal</FieldLabel>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    onOpenChange={() => field.onBlur()}
                  >
                    <SelectTrigger
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      className='min-w-full'
                    >
                      <SelectValue placeholder='Select primary goal' />
                    </SelectTrigger>
                    <SelectContent className='bg-card-bg'>
                      {contactSchema.shape.primaryGoal.options.map((goal) => (
                        <SelectItem key={goal} value={goal}>
                          {goal}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Message */}
            <Controller
              name='message'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Message</FieldLabel>
                  <Textarea
                    id={field.name}
                    className='max-h-100'
                    placeholder='Type your message here'
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Honeypot: invisible to people, bots fill it in */}
            <div aria-hidden className='absolute -left-[9999px] h-0 w-0 overflow-hidden'>
              <label htmlFor='website'>Leave this field empty</label>
              <input
                id='website'
                type='text'
                tabIndex={-1}
                autoComplete='off'
                {...form.register('website')}
              />
            </div>
            <Button
              type='submit'
              className='px-10 max-sm:w-full'
              disabled={loading}
            >
              {loading ? 
              <>
                <Spinner className='size-4' /> Sending...
              </> : <>
                Submit
                <ArrowRightIcon className='size-4' />
              </>}
            </Button>
          </form>
        
      </CardContent>
    </Card>
  )
}

export default ContactForm
