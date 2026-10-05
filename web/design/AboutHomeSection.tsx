'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'

const CREDENTIALS = [
  'NASM',
  'ACE',
  'Certified Nutrition',
  '10 yrs coaching',
  '2,000+ started',
]

const MeetTrevor = () => {
  const reduce = useReducedMotion()

  return (
    <section className='bg-v2-paper text-v2-paper-ink'>
      <MaxWidthWrapper>
        <div className='grid items-center gap-12 py-24 md:py-32 lg:grid-cols-2 lg:gap-20'>
          {/* Treated coaching photo — the partnership, made literal */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className='relative order-last aspect-4/3 overflow-hidden rounded-md lg:order-first'
          >
            <Image
              src='/v2-floor-stretch.webp'
              alt='Trevor coaching a client through a set'
              fill
              sizes='(max-width: 1024px) 100vw, 40rem'
              className='object-cover object-center grayscale-[0.35] contrast-[1.02]'
            />
            {/* <Image
              src='/about1.png'
              alt='Trevor coaching a client through a set'
              fill
              sizes='(max-width: 1024px) 100vw, 40rem'
              className='object-cover object-center grayscale-[0.35] contrast-[1.02]'
            /> */}
            {/* Gradient only where the caption sits, for legibility */}
            <div
              aria-hidden
              className='absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/55 to-transparent'
            />
            <span className='absolute bottom-3 left-4 font-space-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/90'>
              In session
            </span>
          </motion.div>

          {/* Trevor's voice */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <span className='font-space-mono text-xs uppercase tracking-[0.24em] text-my-primary'>
              Who you&apos;ll be working with
            </span>

            <h2 className='mt-5 font-oswald text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.05]'>
              I&apos;m Trevor. I coach the nervous ones best.
            </h2>

            <div className='mt-7 max-w-[58ch] space-y-5 font-archivo text-base leading-relaxed text-v2-paper-muted md:text-lg'>
              <p>
                Ten years ago I was the one who felt out of place in every gym I
                walked into. I know that feeling from the inside, and it is
                exactly why I built my coaching around it.
              </p>
              <p>
                No judgment, no jargon, no pretending you should already know
                what you are doing. Just steady, personal guidance from someone
                whose only job is your progress.
              </p>
            </div>

            {/* Credentials as a deliberate logbook strip, not a stat trio */}
            <div className='mt-9 border-t border-v2-paper-line pt-6'>
              <p className='font-space-mono text-[0.7rem] uppercase tracking-[0.22em] text-my-primary'>
                Certified &amp; accredited
              </p>
              <ul className='mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 font-space-mono text-sm font-bold uppercase tracking-widest text-v2-paper-ink'>
                {CREDENTIALS.map((item, i) => (
                  <li key={item} className='flex items-center gap-3'>
                    {i > 0 && (
                      <span aria-hidden className='font-normal text-my-primary'>
                        ·
                      </span>
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default MeetTrevor
