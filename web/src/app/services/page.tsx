import Contact from '@/components/sections/home/Contact'
import Included from '@/components/sections/services/Included'
import Offerings from '@/components/sections/services/Offerings'
import ServicesHero from '@/components/sections/services/ServicesHero'
import { sanityFetch } from '@/sanity/lib/live'
import { SERVICES_PAGE_QUERY } from '@/sanity/lib/queries'

const ServicesPage = async () => {
  const { data } = await sanityFetch({ query: SERVICES_PAGE_QUERY })

  return (
    <main>
      {data?.sections?.map((section) => {
        switch (section._type) {
          case 'servicesHero':
            return <ServicesHero key={section._key} data={section} />
          case 'offerings':
            return <Offerings key={section._key} data={section} />
          case 'included':
            return <Included key={section._key} data={section} />
          case 'contact':
            return <Contact key={section._key} data={section} />
          default:
            return null
        }
      })}
    </main>
  )
}

export default ServicesPage
