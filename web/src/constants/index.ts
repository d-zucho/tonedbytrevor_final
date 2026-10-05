import { TService } from '@/lib/types'

export const V2_SERVICES: TService[] = [
  {
    tag: 'One-on-one',
    title: 'Personal Training',
    description:
      'Just you and me. Every session, plan, and check-in is built around your body, your goals, and the week you are actually having.',
    features: [
      'Sessions shaped to your level',
      'A plan that adjusts every week',
      'Form first, weight later',
    ],
  },
  {
    tag: 'Balance',
    title: 'Recovery & Mindset',
    description:
      'Training is only half of it. We work on the sleep, stress, and habits that decide whether any of the rest actually sticks.',
    features: [
      'Sleep and stress routines',
      'Simple recovery protocols',
      'Habits that survive a real week',
    ],
  },
  {
    tag: 'Together',
    title: 'Small-Group Sessions',
    description:
      'Train alongside a few others at your level. The accountability of a group, without ever feeling lost in a crowd.',
    features: [
      'Small, level-matched groups',
      'Still real personal attention',
      'A room that is actually welcoming',
    ],
  },
]

export const PILLARS = [
  {
    title: 'Elite Personal Training',
    description:
      'Precision-engineered 1-on-1 coaching. Every rep, every set, and every recovery period is optimized for your specific biomechanics and goals.',
    facts: [
      '1-on-1 focused sessions',
      'Biometric Assessment',
      'Form Correction & Safety',
    ],
    link: 'Explore Training',
  },
  {
    title: 'Mindfulness & Recovery',
    description:
      'Balancing the body and mind. Integrating techniques for stress relief, sleep optimization, and recovery strategies to boost perfiormance and overall well-being.',
    facts: [
      'Guided Meditations',
      'Sleep Hygiene Practices',
      'Recovery Protocols',
    ],
    link: 'Discover Mindfulness',
  },
  {
    title: 'Group Fitness Sessions',
    description:
      'Join a community while getting fit and healthy. Our high-energy classes are designed to make fitness fun and accessible for everyone, regardless of experience level.',
    facts: [
      'Variety of classes',
      'Motivational Atmosphere',
      'Dynamic Workouts',
    ],
    link: 'Join a class',
  },
]


export const V2_SERVICE_INCLUDES: string[] = [
  'A plan made for you, not a template',
  'Weekly check-ins so you are never guessing',
  'Message access between sessions',
  'Honest coaching, and no upsells',
]