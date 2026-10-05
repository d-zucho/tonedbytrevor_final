'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import type { FirstWeeksData } from '@/sanity/lib/types'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { useRef } from 'react'

const FirstWeeks = ({ data }: { data: FirstWeeksData }) => {
  const reduce = useReducedMotion()
  const { eyebrow, title, introText, steps } = data
  const railRef = useRef<HTMLOListElement>(null)

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 75%', 'end 55%'],
  })
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  })
  // When motion is reduced, show the rail fully drawn and static.
  const scaleY = useTransform(reduce ? scrollYProgress : smooth, (v) =>
    reduce ? 1 : v
  )

  return (
    <section id='first-weeks' className='bg-v2-base text-v2-ink'>
      <MaxWidthWrapper>
        <div className='py-24 md:py-32'>
          {/* Heading */}
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
              <p className='mt-6 max-w-[56ch] font-archivo text-base leading-relaxed text-v2-ink/80 md:text-lg'>
                {introText}
              </p>
            )}
          </div>

          {/* Timeline */}
          <ol
            ref={railRef}
            className='relative mt-16 grid grid-cols-1'
          >
            {/* Track + scroll-drawn fill, aligned to the dot column */}
            <div
              aria-hidden
              className='absolute bottom-6 left-20 top-2 w-px bg-v2-line sm:left-28'
            />
            <motion.div
              aria-hidden
              style={{ scaleY }}
              className='absolute bottom-6 left-20 top-2 w-px origin-top bg-my-primary sm:left-28'
            />

            {steps?.map((week, i) => (
              <motion.li
                key={week._key}
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: reduce ? 0 : i * 0.05,
                }}
                className='grid grid-cols-[5rem_1fr] gap-x-6 pb-14 last:pb-0 sm:grid-cols-[7rem_1fr]'
              >
                {/* Week marker */}
                <span className='pt-0.5 text-right font-space-mono text-xs font-bold uppercase tracking-[0.12em] text-my-primary'>
                  {week.marker}
                </span>

                {/* Node + content */}
                <div className='relative pl-8'>
                  <span
                    aria-hidden
                    className='absolute left-0 top-1 size-3 -translate-x-1/2 rounded-full border-2 border-my-primary bg-v2-base'
                  />
                  <h3 className='font-oswald text-xl font-bold uppercase leading-tight md:text-2xl'>
                    {week.title}
                  </h3>
                  {week.description && (
                    <p className='mt-3 max-w-[52ch] font-archivo text-base leading-relaxed text-v2-muted'>
                      {week.description}
                    </p>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default FirstWeeks
