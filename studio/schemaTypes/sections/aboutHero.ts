import {defineField, defineType} from 'sanity'

export const aboutHero = defineType({
  name: 'aboutHero',
  title: 'About Hero',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({
      name: 'title',
      type: 'string',
      description: 'The start of the headline, e.g. "The coach in".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'titleHighlight',
      type: 'string',
      description: 'The end of the headline, shown in the brand color, e.g. "your corner."',
    }),
    defineField({
      name: 'introText',
      type: 'text',
      rows: 4,
      validation: (r) => r.max(280).warning('Keep it to about 3 lines'),
    }),
    defineField({
      name: 'cta',
      title: 'Button',
      description: 'Leave empty to hide the button.',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string', validation: (r) => r.required()}),
        defineField({
          name: 'href',
          type: 'string',
          description: 'e.g. /#contact to jump to the contact form on the home page.',
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'name', title: 'Name', type: 'string'}),
        defineField({
          name: 'detail',
          type: 'string',
          description: 'Shown on the right of the caption strip, e.g. "Est. 2016".',
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title', highlight: 'titleHighlight', media: 'image'},
    prepare: ({title, highlight, media}) => ({
      title: [title, highlight].filter(Boolean).join(' ') || 'Untitled',
      subtitle: 'About Hero',
      media,
    }),
  },
})
