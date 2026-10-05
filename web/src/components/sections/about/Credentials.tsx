'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import type { CredentialsData } from '@/sanity/lib/types'
import { motion, useReducedMotion } from 'motion/react'

const Credentials = ({ data }: { data: CredentialsData }) => {
  const reduce = useReducedMotion()
  const { eyebrow, title, introText, credentials } = data

  return (
    <section className='bg-v2-base text-v2-ink'>
      <MaxWidthWrapper>
        <div className='py-24 md:py-32'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div className='max-w-xl'>
              {eyebrow && (
                <span className='font-space-mono text-xs uppercase tracking-[0.24em] text-my-primary'>
                  {eyebrow}
                </span>
              )}
              {title && (
                <h2 className='mt-5 font-oswald text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.02]'>
                  {title}
                </h2>
              )}
            </div>
            {introText && (
              <p className='max-w-sm font-archivo text-base leading-relaxed text-v2-muted'>
                {introText}
              </p>
            )}
          </div>

          {/* Credential band — hairline-divided columns, not cards */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='mt-14 grid grid-cols-1 divide-y divide-v2-line border-y border-v2-line sm:grid-cols-3 sm:divide-x sm:divide-y-0'
          >
            {credentials?.map((c) => (
              <div
                key={c._key}
                className='px-0 py-8 sm:px-8 sm:py-7 sm:first:pl-0 sm:last:pr-0'
              >
                <h3 className='font-oswald text-4xl font-bold uppercase leading-none md:text-5xl'>
                  {c.title}
                </h3>
                {c.description && (
                  <p className='mt-3 font-space-mono text-xs uppercase tracking-[0.14em] text-v2-muted'>
                    {c.description}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Credentials
