'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import type { ProofData } from '@/sanity/lib/types'
import { motion, useReducedMotion } from 'motion/react'

// Editorial offsets so the quotes read as a spread, not a uniform grid
const SPAN = [
  'md:col-span-7',
  'md:col-span-7 md:col-start-6',
  'md:col-span-8',
]

const Proof = ({ data }: { data: ProofData }) => {
  const reduce = useReducedMotion()
  const { eyebrow, title, introText, testimonials } = data

  return (
    <section className='bg-v2-base text-v2-ink'>
      <MaxWidthWrapper>
        <div className='py-24 md:py-32'>
          <div className='max-w-2xl'>
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
            {introText && (
              <p className='mt-6 max-w-[54ch] font-archivo text-base leading-relaxed text-v2-ink/80 md:text-lg'>
                {introText}
              </p>
            )}
          </div>

          <div className='mt-16 grid grid-cols-1 gap-y-14 md:grid-cols-12 md:gap-x-8'>
            {testimonials?.map((t, i) => (
              <motion.blockquote
                key={t._key}
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`col-span-1 ${SPAN[i] ?? ''}`}
              >
                <span aria-hidden className='mb-6 block h-0.5 w-10 bg-my-primary' />
                {t.quote && (
                  <p className='font-archivo text-xl leading-relaxed text-v2-ink md:text-2xl md:leading-relaxed'>
                    {`“${t.quote}”`}
                  </p>
                )}
                <footer className='mt-6 font-space-mono text-xs uppercase tracking-[0.14em]'>
                  <span className='text-v2-ink'>{t.name}</span>
                  {t.label && <span className='text-v2-muted'>{` · ${t.label}`}</span>}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Proof
