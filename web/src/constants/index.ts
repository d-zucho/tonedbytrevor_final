import { TContactInfo } from '@/lib/types';
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