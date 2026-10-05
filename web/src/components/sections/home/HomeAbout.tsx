'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { motion, useReducedMotion } from 'motion/react'
import type { AboutData } from '@/sanity/lib/types'

const HomeAbout = ({ data }: { data: AboutData }) => {
  const reduce = useReducedMotion()
  const { eyebrow, title, body, listTitle, credentials, image } = data

  return (
    <section className='bg-v2-paper text-v2-paper-ink'>
      <MaxWidthWrapper>
        <div className='grid items-center gap-12 py-24 md:py-32 lg:grid-cols-2 lg:gap-20'>
          {/* Treated coaching photo — the partnership, made literal */}
          {image?.asset && (
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className='relative order-last aspect-4/3 overflow-hidden rounded-md lg:order-first'
            >
              <Image
                src={urlFor(image).width(1000).auto('format').url()}
                alt={image.alt ?? ''}
                fill
                sizes='(max-width: 1024px) 100vw, 40rem'
                className='object-cover object-center grayscale-[0.35] contrast-[1.02]'
              />
              {/* Gradient only where the caption sits, for legibility */}
              {image.caption && (
                <>
                  <div
                    aria-hidden
                    className='absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/55 to-transparent'
                  />
                  <span className='absolute bottom-3 left-4 font-space-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/90'>
                    {image.caption}
                  </span>
                </>
              )}
            </motion.div>
          )}

          {/* Trevor's voice */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            {eyebrow && (
              <span className='font-space-mono text-xs uppercase tracking-[0.24em] text-my-primary'>
                {eyebrow}
              </span>
            )}

            {title && (
              <h2 className='mt-5 font-oswald text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold uppercase leading-[1.05]'>
                {title}
              </h2>
            )}

            {body && body.length > 0 && (
              <div className='mt-7 max-w-[58ch] space-y-5 font-archivo text-base leading-relaxed text-v2-paper-muted md:text-lg'>
                <PortableText value={body} />
              </div>
            )}

            {/* Credentials as a deliberate logbook strip, not a stat trio */}
            {credentials && credentials.length > 0 && (
              <div className='mt-9 border-t border-v2-paper-line pt-6'>
                {listTitle && (
                  <p className='font-space-mono text-[0.7rem] uppercase tracking-[0.22em] text-my-primary'>
                    {listTitle}
                  </p>
                )}
                <ul className='mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 font-space-mono text-sm font-bold uppercase tracking-widest text-v2-paper-ink'>
                  {credentials.map((item, i) => (
                    <li key={`${i}-${item}`} className='flex items-center gap-3'>
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
            )}
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeAbout
