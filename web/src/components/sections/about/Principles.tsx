'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import type { PrinciplesData } from '@/sanity/lib/types'
import { motion, useReducedMotion } from 'motion/react'

const Principles = ({ data }: { data: PrinciplesData }) => {
  const reduce = useReducedMotion()
  const { eyebrow, title, introText, principles } = data

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

          <div className='mt-16 grid grid-cols-1 gap-x-14 gap-y-14 md:grid-cols-2'>
            {principles?.map((p, i) => (
              <motion.article
                key={p._key}
                initial={{ opacity: 0, y: reduce ? 0 : 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: reduce ? 0 : i * 0.06,
                }}
              >
                <span aria-hidden className='mb-5 block h-0.5 w-9 bg-my-primary' />
                {p.label && (
                  <p className='font-space-mono text-[0.7rem] uppercase tracking-[0.22em] text-v2-muted'>
                    {p.label}
                  </p>
                )}
                <h3 className='mt-3 font-oswald text-2xl font-bold uppercase leading-tight md:text-3xl'>
                  {p.title}
                </h3>
                {p.description && (
                  <p className='mt-4 max-w-[46ch] font-archivo text-base leading-relaxed text-v2-muted'>
                    {p.description}
                  </p>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Principles
