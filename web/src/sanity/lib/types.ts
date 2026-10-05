import type { HOME_PAGE_QUERY_RESULT } from '../../../sanity.types'

type HomeSection = NonNullable<
  NonNullable<HOME_PAGE_QUERY_RESULT>['sections']
>[number]

export type HeroData = Extract<HomeSection, { _type: 'hero' }>
export type AboutData = Extract<HomeSection, { _type: 'about' }>
export type FirstWeeksData = Extract<HomeSection, { _type: 'firstWeeks' }>
export type MethodData = Extract<HomeSection, { _type: 'method' }>
export type ProofData = Extract<HomeSection, { _type: 'proof' }>

