'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import type { OfferingsData } from '@/sanity/lib/types'
import { motion, useReducedMotion } from 'motion/react'
import { Check } from 'lucide-react'

const Offerings = ({ data }: { data: OfferingsData }) => {
  const reduce = useReducedMotion()
  const { eyebrow, title, introText, offerings } = data

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

          <div className='mt-16'>
            {offerings?.map((service, i) => (
              <motion.article
                key={service._key}
                initial={{ opacity: 0, y: reduce ? 0 : 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: reduce ? 0 : i * 0.06,
                }}
                className='grid grid-cols-1 gap-6 border-t border-v2-line py-12 last:border-b md:grid-cols-[0.9fr_1.1fr] md:gap-12'
              >
                {/* Tag + title */}
                <div>
                  {service.tag && (
                    <span className='font-space-mono text-xs uppercase tracking-[0.2em] text-my-primary'>
                      {service.tag}
                    </span>
                  )}
                  <h3 className='mt-3 font-oswald text-3xl font-bold uppercase leading-[1.05] md:text-5xl'>
                    {service.title}
                  </h3>
                </div>

                {/* Description + features */}
                <div>
                  {service.description && (
                    <p className='max-w-[56ch] font-archivo text-base leading-relaxed text-v2-muted md:text-lg'>
                      {service.description}
                    </p>
                  )}
                  {service.features && service.features.length > 0 && (
                    <ul className='mt-6 flex flex-col gap-3'>
                      {service.features.map((feature, fi) => (
                        <li
                          key={`${fi}-${feature}`}
                          className='flex items-center gap-3 font-archivo text-sm text-v2-ink md:text-base'
                        >
                          <Check className='size-4 shrink-0 text-my-primary' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Offerings
