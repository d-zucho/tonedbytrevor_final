import Link from 'next/link'
import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';
import type { NAV_QUERY_RESULT } from '../../../sanity.types';

const NAV_QUERY = defineQuery(`
  *[_id == "siteSettings"][0]{
    logo{ alt, "url": asset->url },
    navLinks[]{ _key, label, href },
    contactButton{ label, href }
  }
`);

export type NavData = NAV_QUERY_RESULT

export async function Header() {
  const { data } = await sanityFetch({ query: NAV_QUERY })

  return (
    <header className='text-white h-20 z-10 relative bg-my-bg/40 backdrop-blur-2xl'>
      <MaxWidthWrapper>
        <div className='py-5 flex items-center justify-between'>
          {data?.logo?.url && (
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element -- next/image rejects SVGs by default */}
              <img src={data.logo.url} alt={data.logo.alt ?? ''} className="h-8 w-auto" />
            </Link>
          )}

          {/* NAV ITEMS */}
          <nav className="hidden md:flex items-center gap-5">
            {data?.navLinks?.map((link) => link.href && (
              <div key={link._key} className='w-fit relative group overflow-clip'>
                <Link href={link.href}>{link.label}</Link>
                <div
                  className={
                    'w-full h-0.5 rounded-full bg-my-primary absolute bottom-0 -left-full group-hover:left-0 group-hover:right-0 transition-all duration-400'
                  }
                />
              </div>
            ))}
          </nav>

          {/* CONTACT BUTTON */}
          {data?.contactButton?.href && (
            <Button variant={'default'} className='px-8 hidden md:flex'>
              <Link href={data.contactButton.href} className='text-base font-medium'>{data.contactButton.label}</Link>
            </Button>
          )}

          {/* MOBILE MENU TRIGGER */}
          <div className='md:hidden'>
            <MobileNav data={data} />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
