import {defineArrayMember, defineField, defineType} from 'sanity'

export const firstWeeks = defineType({
  name: 'firstWeeks',
  title: 'First Weeks',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'introText', type: 'text', rows: 3}),
    defineField({
      name: 'steps',
      description: 'The timeline, in order. Add or remove as many as you need.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'marker',
              type: 'string',
              description: 'Short label shown beside the timeline, e.g. "WK 01" or "ONWARD".',
              validation: (r) => r.required(),
            }),
            defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
            defineField({
              name: 'description',
              type: 'text',
              rows: 3,
              validation: (r) => r.max(220).warning('Keep it to about 2 to 3 lines'),
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'marker'}},
        }),
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Untitled', subtitle: 'First Weeks'}),
  },
})
