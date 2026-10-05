'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import type { MyStoryData } from '@/sanity/lib/types'
import { PortableText } from 'next-sanity'
import { motion, useReducedMotion } from 'motion/react'

const MyStory = ({ data }: { data: MyStoryData }) => {
  const reduce = useReducedMotion()
  const { eyebrow, title, body, quote, quoteLabel } = data

  return (
    <section className='bg-v2-paper text-v2-paper-ink'>
      <MaxWidthWrapper>
        <div className='grid gap-14 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20'>
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
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

            {body && body.length > 0 && (
              <div className='mt-7 max-w-[58ch] space-y-5 font-archivo text-base leading-relaxed text-v2-paper-muted md:text-lg'>
                <PortableText value={body} />
              </div>
            )}
          </motion.div>

          {/* Philosophy pull-quote */}
          {quote && (
            <motion.figure
              initial={{ opacity: 0, y: reduce ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className='flex flex-col justify-center border-t border-v2-paper-line pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0'
            >
              <blockquote className='font-oswald text-2xl font-bold uppercase leading-[1.15] md:text-3xl'>
                {quote}
              </blockquote>
              {quoteLabel && (
                <figcaption className='mt-6 font-space-mono text-[0.7rem] uppercase tracking-[0.22em] text-my-primary'>
                  {quoteLabel}
                </figcaption>
              )}
            </motion.figure>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default MyStory
