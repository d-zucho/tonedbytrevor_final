import { TContactInfo, TCredential, TPrinciple } from '@/lib/types';
import { Mail, MapPin, Phone } from 'lucide-react';

export const CONTACT_INFO: TContactInfo[] = [
  {
    icon: Mail,
    label: 'Email Me',
    text: 'trevor1234@gmail.com',
  },
  {
    icon: Phone,
    label: 'Call for Support',
    text: '+1 (999) 123-4567',
  },
  {
    icon: MapPin,
    label: 'Location',
    text: 'Orange County, CA (and Worldwide Online)',
  },
]

export const CREDENTIALS_INFO: TCredential[] = [
  {
    title: 'NASM',
    description: 'Pes specialist',
    image: '/icons/nasm-icon.svg',
  },
  {
    title: 'AFAA',
    description: 'Certified Trainer',
    image: '/icons/afaa-icon.svg',
  },
  {
    title: 'CCS',
    description: 'Certified Corrective Specialist',
    image: '/icons/ccs-icon.svg',
  },
]

export const ABOUT_PRINCIPLES: TPrinciple[] = [
  {
    label: 'Form',
    title: 'Form before weight',
    description:
      'We earn every load. If a movement is not clean, we do not add to it. Progress you cannot control is not progress.',
  },
  {
    label: 'Bespoke',
    title: 'Your plan, not a template',
    description:
      'No two bodies, schedules, or histories are the same, so no two programs I write are either. Yours is built around your life.',
  },
  {
    label: 'Consistency',
    title: 'Consistency over intensity',
    description:
      'The best session is the one you will come back to on Thursday. We build habits that survive a bad week, not just a good one.',
  },
  {
    label: 'Honesty',
    title: 'Honest coaching, always',
    description:
      'I will tell you what is working and what is not. You will always know why we are doing what we are doing.',
  },
]

export const MY_METHODS = [
  {
    title: 'Kinetic Assessment',
    description:
      'We start with a deep-dive analysis of your biomechanics to identify imbalances before we ever touch a weight.',
  },
  {
    title: 'Hyper-Periodization',
    description:
      'Custom programming that evolves weekly progress, ensuring you never plateau and always keep the body guessing.',
  },
  {
    title: 'Metabolic Mastery',
    description:
      "Nutrition isn't a diet; it's fuel. We optimize your macros to match your trainingintensity and recovery needs.",
  },
  {
    title: 'Strength Synergy',
    description:
      'Combining strength training and functional movements for a comprehensive approach to power and endurance.',
  },
]