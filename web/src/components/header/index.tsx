import Link from 'next/link'
import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live';

const NAV_QUERY = defineQuery(`
  *[_id == "siteSettings"][0]{
    logo{ alt, "url": asset->url },
    navLinks[]{ _key, label, href }
  }
`);

type NavData = {
  logo: { alt: string | null; url: string | null } | null
  navLinks: { _key: string; label: string; href: string }[] | null
} | null

export async function Header() {
  const { data } = (await sanityFetch({ query: NAV_QUERY })) as { data: NavData }

  return (
    <header className="flex items-center justify-between p-4">
      {data?.logo?.url && (
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element -- next/image rejects SVGs by default */}
          <img src={data.logo.url} alt={data.logo.alt ?? ''} className="h-8 w-auto" />
        </Link>
      )}
      <nav className="flex gap-6">
        {data?.navLinks?.map((link) => (
          <Link key={link._key} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
