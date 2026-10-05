import {defineArrayMember, defineField, defineType} from 'sanity'

export const servicesHero = defineType({
  name: 'servicesHero',
  title: 'Services Hero',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({
      name: 'title',
      type: 'string',
      description: 'The start of the headline, e.g. "Find the way that".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'titleHighlight',
      type: 'string',
      description: 'The end of the headline, shown in the brand color, e.g. "fits your life."',
    }),
    defineField({
      name: 'introText',
      type: 'text',
      rows: 4,
      description:
        'The row of service names under the buttons is filled in automatically from the Offerings section.',
      validation: (r) => r.max(280).warning('Keep it to about 3 lines'),
    }),
    defineField({
      name: 'ctas',
      title: 'Buttons',
      description: 'Up to two. The first is the main button, the second is shown as a text link.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string', validation: (r) => r.required()}),
            defineField({
              name: 'href',
              type: 'string',
              description: 'e.g. #contact to scroll to the contact form on this page.',
              validation: (r) => r.required(),
            }),
          ],
          preview: {select: {title: 'label', subtitle: 'href'}},
        }),
      ],
      validation: (r) => r.max(2),
    }),
  ],
  preview: {
    select: {title: 'title', highlight: 'titleHighlight'},
    prepare: ({title, highlight}) => ({
      title: [title, highlight].filter(Boolean).join(' ') || 'Untitled',
      subtitle: 'Services Hero',
    }),
  },
})
