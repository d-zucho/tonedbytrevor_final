import { LucideIcon } from 'lucide-react'

export type TFirstWeek = {
  marker: string // logbook notation, e.g. "WK 01"
  title: string
  description: string
}

export type TContactInfo = {
  icon: LucideIcon
  text: string
  label?: string
}