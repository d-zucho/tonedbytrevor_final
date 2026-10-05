import {defineArrayMember, defineField, defineType} from 'sanity'

export const proof = defineType({
  name: 'proof',
  title: 'Proof',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'introText', type: 'text', rows: 3}),
    defineField({
      name: 'testimonials',
      description: 'Client quotes, in the order they appear.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'name', type: 'string', validation: (r) => r.required()}),
            defineField({
              name: 'quote',
              type: 'text',
              rows: 4,
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'label',
              type: 'string',
              description: 'Shown after the name, e.g. "Started at 34, nine months in".',
            }),
          ],
          preview: {select: {title: 'name', subtitle: 'quote'}},
        }),
      ],
      validation: (r) =>
        r.min(1).max(3).warning('The layout is designed for up to 3 quotes'),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Untitled', subtitle: 'Proof'}),
  },
})
