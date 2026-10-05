import FirstWeeks from '@/components/sections/home/FirstWeeks'
import HomeAbout from '@/components/sections/home/HomeAbout'
import Hero from '@/components/sections/home/Hero'
import Method from '@/components/sections/home/Method'
import { sanityFetch } from '@/sanity/lib/live'
import { HOME_PAGE_QUERY } from '@/sanity/lib/queries'

export default async function Home() {
  const { data } = await sanityFetch({ query: HOME_PAGE_QUERY })

  return (
    <main>
      {data?.sections?.map((section) => {
        switch (section._type) {
          case 'hero':
            return <Hero key={section._key} data={section} />
          case 'about':
            return <HomeAbout key={section._key} data={section} />
          case 'firstWeeks':
            return <FirstWeeks key={section._key} data={section} />
          case 'method':
            return <Method key={section._key} data={section} />
          default:
            return null
        }
      })}
    </main>
  )
}
