import type {
  ABOUT_PAGE_QUERY_RESULT,
  HOME_PAGE_QUERY_RESULT,
  SERVICES_PAGE_QUERY_RESULT,
} from '../../../sanity.types'

type HomeSection = NonNullable<
  NonNullable<HOME_PAGE_QUERY_RESULT>['sections']
>[number]

export type HeroData = Extract<HomeSection, { _type: 'hero' }>
export type AboutData = Extract<HomeSection, { _type: 'about' }>
export type FirstWeeksData = Extract<HomeSection, { _type: 'firstWeeks' }>
export type MethodData = Extract<HomeSection, { _type: 'method' }>
export type ProofData = Extract<HomeSection, { _type: 'proof' }>
export type ContactData = Extract<HomeSection, { _type: 'contact' }>

type AboutPageSection = NonNullable<
  NonNullable<ABOUT_PAGE_QUERY_RESULT>['sections']
>[number]

export type AboutHeroData = Extract<AboutPageSection, { _type: 'aboutHero' }>
export type MyStoryData = Extract<AboutPageSection, { _type: 'myStory' }>
export type PrinciplesData = Extract<AboutPageSection, { _type: 'principles' }>
export type CredentialsData = Extract<AboutPageSection, { _type: 'credentials' }>

type ServicesPageSection = NonNullable<
  NonNullable<SERVICES_PAGE_QUERY_RESULT>['sections']
>[number]

export type ServicesHeroData = Extract<ServicesPageSection, { _type: 'servicesHero' }>
export type OfferingsData = Extract<ServicesPageSection, { _type: 'offerings' }>
export type IncludedData = Extract<ServicesPageSection, { _type: 'included' }>
