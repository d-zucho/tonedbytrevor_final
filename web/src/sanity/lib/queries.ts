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
      },
      _type == "method" => {
        eyebrow,
        title,
        sideNote,
        methods[]{ _key, title, description }
      },
      _type == "proof" => {
        eyebrow,
        title,
        introText,
        testimonials[]{ _key, name, quote, label }
      },
      _type == "contact" => {
        eyebrow,
        title,
        introText,
        details[]{ _key, label, text, href, "iconUrl": icon.asset->url }
      }
    }
  }
`)

export const ABOUT_PAGE_QUERY = defineQuery(`
  *[_id == "aboutPage"][0]{
    sections[]{
      _key,
      _type,
      _type == "aboutHero" => {
        eyebrow,
        title,
        titleHighlight,
        introText,
        cta{ label, href },
        image{ alt, name, detail, asset }
      },
      _type == "myStory" => {
        eyebrow,
        title,
        body,
        quote,
        quoteLabel
      },
      _type == "method" => {
        eyebrow,
        title,
        sideNote,
        methods[]{ _key, title, description }
      },
      _type == "principles" => {
        eyebrow,
        title,
        introText,
        principles[]{ _key, label, title, description }
      },
      _type == "credentials" => {
        eyebrow,
        title,
        introText,
        credentials[]{ _key, title, description }
      },
      _type == "contact" => {
        eyebrow,
        title,
        introText,
        details[]{ _key, label, text, href, "iconUrl": icon.asset->url }
      }
    }
  }
`)

export const SERVICES_PAGE_QUERY = defineQuery(`
  *[_id == "servicesPage"][0]{
    sections[]{
      _key,
      _type,
      _type == "servicesHero" => {
        eyebrow,
        title,
        titleHighlight,
        introText,
        ctas[]{ _key, label, href },
        "teaser": ^.sections[_type == "offerings"][0].offerings[].title
      },
      _type == "offerings" => {
        eyebrow,
        title,
        introText,
        offerings[]{ _key, tag, title, description, features }
      },
      _type == "included" => {
        eyebrow,
        title,
        introText,
        items
      },
      _type == "contact" => {
        eyebrow,
        title,
        introText,
        details[]{ _key, label, text, href, "iconUrl": icon.asset->url }
      }
    }
  }
`)
