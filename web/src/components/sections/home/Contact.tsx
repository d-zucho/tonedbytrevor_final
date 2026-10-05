'use client'

import ContactForm from '@/components/ContactForm'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import type { ContactData } from '@/sanity/lib/types'
import { motion, useReducedMotion } from 'motion/react'

const Contact = ({ data }: { data: ContactData }) => {
  const reduce = useReducedMotion()
  const { eyebrow, title, introText, details } = data

  return (
    <section id='contact' className='bg-v2-paper text-v2-paper-ink'>
      <MaxWidthWrapper>
        <div className='grid items-center gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-20'>
          {/* The invitation */}
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
              <h2 className='mt-5 font-oswald text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.98]'>
                {title}
              </h2>
            )}
            {introText && (
              <p className='mt-6 max-w-[50ch] font-archivo text-base leading-relaxed text-v2-paper-muted md:text-lg'>
                {introText}
              </p>
            )}

            {details && details.length > 0 && (
              <ul className='mt-10 space-y-6'>
                {details.map((item) => (
                  <li key={item._key} className='flex items-start gap-4'>
                    {/* The uploaded file is used as a shape, so any icon takes the brand color */}
                    {item.iconUrl && (
                      <span
                        aria-hidden
                        className='mt-0.5 size-5 shrink-0 bg-my-primary'
                        style={{
                          maskImage: `url(${item.iconUrl})`,
                          WebkitMaskImage: `url(${item.iconUrl})`,
                          maskSize: 'contain',
                          WebkitMaskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          WebkitMaskRepeat: 'no-repeat',
                          maskPosition: 'center',
                          WebkitMaskPosition: 'center',
                        }}
                      />
                    )}
                    <div>
                      {item.label && (
                        <p className='font-space-mono text-[0.7rem] uppercase tracking-[0.16em] text-v2-paper-muted'>
                          {item.label}
                        </p>
                      )}
                      <p className='font-archivo text-base text-v2-paper-ink'>
                        {item.href ? (
                          <a
                            href={item.href}
                            {...(item.href.startsWith('http')
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : {})}
                            className='underline-offset-4 transition-colors hover:text-my-primary hover:underline'
                          >
                            {item.text}
                          </a>
                        ) : (
                          item.text
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* The dark form card sits as a deliberate object on the warm paper */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className='w-full lg:justify-self-end'
          >
            <ContactForm />
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Contact
