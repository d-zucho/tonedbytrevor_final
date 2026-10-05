'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import type { IncludedData } from '@/sanity/lib/types'
import { motion, useReducedMotion } from 'motion/react'
import { Check } from 'lucide-react'

const Included = ({ data }: { data: IncludedData }) => {
  const reduce = useReducedMotion()
  const { eyebrow, title, introText, items } = data

  return (
    <section className='bg-v2-paper text-v2-paper-ink'>
      <MaxWidthWrapper>
        <div className='grid gap-12 py-24 md:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
          <div>
            {eyebrow && (
              <span className='font-space-mono text-xs uppercase tracking-[0.24em] text-my-primary'>
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className='mt-5 font-oswald text-[clamp(2.25rem,5vw,3.5rem)] font-bold uppercase leading-[1.02]'>
                {title}
              </h2>
            )}
            {introText && (
              <p className='mt-6 max-w-[46ch] font-archivo text-base leading-relaxed text-v2-paper-muted md:text-lg'>
                {introText}
              </p>
            )}
          </div>

          <ul className='grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2'>
            {items?.map((item, i) => (
              <motion.li
                key={`${i}-${item}`}
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: reduce ? 0 : i * 0.06,
                }}
                className='flex items-start gap-4 border-t border-v2-paper-line pt-5'
              >
                <Check className='mt-1 size-5 shrink-0 text-my-primary' />
                <span className='font-archivo text-base leading-snug text-v2-paper-ink md:text-lg'>
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Included
