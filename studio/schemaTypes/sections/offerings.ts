import {defineArrayMember, defineField, defineType} from 'sanity'

export const offerings = defineType({
  name: 'offerings',
  title: 'Offerings',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'introText', type: 'text', rows: 3}),
    defineField({
      name: 'offerings',
      description:
        'Each one is listed in full here, and its title also appears in the hero at the top of the page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'tag',
              type: 'string',
              description: 'Short tag above the title, e.g. "One-on-one".',
            }),
            defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
            defineField({
              name: 'description',
              type: 'text',
              rows: 3,
              validation: (r) => r.max(260).warning('Keep it to about 3 lines'),
            }),
            defineField({
              name: 'features',
              description: 'Short checklist items. Add or remove as many as you need.',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'tag'}},
        }),
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Untitled', subtitle: 'Offerings'}),
  },
})
