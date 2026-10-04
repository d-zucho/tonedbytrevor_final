import { ChevronRight, MenuIcon } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import type { NavData } from './index'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { SOCIALS } from '@/constants/socials'
import Image from 'next/image'

const MobileNav = ( { data }: { data : NavData }) => {
  return (
    <Sheet>
      <SheetTrigger aria-label='Open menu'>
        <MenuIcon className='hover:cursor-pointer' />
      </SheetTrigger>
      <SheetContent className={'bg-my-bg'}>
        <SheetHeader className='sr-only'>
          <SheetTitle>Toned By Trevor</SheetTitle>
          <SheetDescription>Get individualized fitness plans that meet your needs</SheetDescription>
        </SheetHeader>

        <div className='p-5'>
          {/* LOGO */}
          {data?.logo?.url && (
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element -- next/image rejects SVGs by default */}
              <img src={data.logo.url} alt={data.logo.alt ?? ''} className="h-8 w-auto" />
            </Link>
          )}
        </div>

        {/* NAV LINKS */}
        <div className='flex flex-col gap-5 mt-12 px-5'>
          {data?.navLinks?.map((link) => link.href && (
            <SheetClose key={link._key}>
              <Link href={link.href} className={buttonVariants({
                variant: 'ghost',
                className: 'w-full font-semibold py-6 text-lg! justify-start hover:bg-my-primary! transition-all duration-300',
              })}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className='ml-auto' />
              </Link>
            </SheetClose>
          ))}
        </div>

        <div className='mt-24 px-5'>
          <Button variant={'default'} className='px-8 w-full hover:scale-102 transition-all duration-300'>
            <Link href={data?.contactButton?.href!} className='text-base font-medium'>{data?.contactButton?.label}</Link>
          </Button>
        </div>

        <div className='flex gap-3 items-center justify-center mt-12'>
              {/* Social Links */}

              {SOCIALS.map((social) => (
                <div
                  key={social.label}
                  className='p-2 rounded-full bg-muted w-fit border-2 border-border hover:border-my-primary transition-colors duration-300'
                >
                  <Link
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={24}
                      height={24}
                      className='text-white'
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className='text-center mt-5'>
              <span className='text-muted-foreground/50'>
                &copy; 2026 Trevor Woodard
              </span>
            </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav