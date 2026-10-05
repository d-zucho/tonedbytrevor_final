'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { urlFor } from '@/sanity/lib/image'
import type { AboutHeroData } from '@/sanity/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, type Variants } from 'motion/react'

const AboutHero = ({ data }: { data: AboutHeroData }) => {
  const reduce = useReducedMotion()
  const { eyebrow, title, titleHighlight, introText, cta, image } = data

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 },
    },
  }
  const fade: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className='relative bg-v2-base text-v2-ink overflow-hidden'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_0%,#241a13_0%,transparent_55%)]'
      />

      <MaxWidthWrapper className='relative'>
        <div className='grid items-center gap-12 py-24 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16'>
          {/* Portrait */}
          {image?.asset && (
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className='relative order-last mx-auto w-full max-w-sm lg:order-first lg:max-w-none'
            >
              <div className='relative aspect-4/5 overflow-hidden rounded-md bg-v2-surface'>
                <Image
                  src={urlFor(image).width(1000).auto('format').url()}
                  alt={image.alt ?? ''}
                  fill
                  priority
                  sizes='(max-width: 1024px) 24rem, 28rem'
                  className='object-cover object-top contrast-[1.03]'
                />
                {(image.name || image.detail) && (
                  <>
                    <div
                      aria-hidden
                      className='absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/55 to-transparent'
                    />
                    <div className='absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 font-space-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/90'>
                      <span>{image.name}</span>
                      <span className='text-my-primary'>{image.detail}</span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* Intro */}
          <motion.div variants={container} initial='hidden' animate='show'>
            {eyebrow && (
              <motion.span
                variants={fade}
                className='font-space-mono text-xs uppercase tracking-[0.28em] text-my-primary'
              >
                {eyebrow}
              </motion.span>
            )}

            {title && (
              <motion.h1
                variants={fade}
                className='mt-6 font-oswald font-bold uppercase leading-[0.95] text-[clamp(2.75rem,8vw,5.5rem)]'
              >
                {title}
                {titleHighlight && (
                  <>
                    {' '}
                    <span className='text-my-primary'>{titleHighlight}</span>
                  </>
                )}
              </motion.h1>
            )}

            {introText && (
              <motion.p
                variants={fade}
                className='mt-7 max-w-[54ch] font-archivo text-base leading-relaxed text-v2-ink/85 md:text-lg'
              >
                {introText}
              </motion.p>
            )}

            {cta?.label && cta.href && (
              <motion.div variants={fade} className='mt-9'>
                <Button
                  render={<Link href={cta.href} />}
                  nativeButton={false}
                  className='h-12 text-base! transition-shadow hover:shadow-[0_0_28px_rgba(244,117,33,0.35)]'
                >
                  {cta.label}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutHero
