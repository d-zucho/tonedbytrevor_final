import AboutHero from '@/components/sections/about/AboutHero'
import Contact from '@/components/sections/home/Contact'
import Credentials from '@/components/sections/about/Credentials'
import Method from '@/components/sections/home/Method'
import MyStory from '@/components/sections/about/MyStory'
import Principles from '@/components/sections/about/Principles'
import { sanityFetch } from '@/sanity/lib/live'
import { ABOUT_PAGE_QUERY } from '@/sanity/lib/queries'

const AboutPage = async () => {
  const { data } = await sanityFetch({ query: ABOUT_PAGE_QUERY })

  return (
    <main>
      {data?.sections?.map((section) => {
        switch (section._type) {
          case 'aboutHero':
            return <AboutHero key={section._key} data={section} />
          case 'myStory':
            return <MyStory key={section._key} data={section} />
          case 'method':
            return <Method key={section._key} data={section} />
          case 'principles':
            return <Principles key={section._key} data={section} />
          case 'credentials':
            return <Credentials key={section._key} data={section} />
          case 'contact':
            return <Contact key={section._key} data={section} />
          default:
            return null
        }
      })}
    </main>
  )
}

export default AboutPage
