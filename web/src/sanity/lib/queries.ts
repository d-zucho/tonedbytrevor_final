import { defineQuery } from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`
  *[_id == "homePage"][0]{
    sections[]{
      _key,
      _type,
      _type == "hero" => {
        eyebrow,
        title,
        introText,
        ctas[]{ _key, label, href },
        image{ alt, name, role, asset }
      },
      _type == "about" => {
        eyebrow,
        title,
        body,
        listTitle,
        credentials,
        image{ alt, caption, asset }
      },
      _type == "firstWeeks" => {
        eyebrow,
        title,
        introText,
        steps[]{ _key, marker, title, description }
      }
    }
  }
`)
