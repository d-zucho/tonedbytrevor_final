import {defineArrayMember, defineField, defineType} from 'sanity'

export const credentials = defineType({
  name: 'credentials',
  title: 'Credentials',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'introText',
      description: 'Short paragraph shown beside the title.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'credentials',
      description: 'Shown side by side in a row of three.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              description: 'The big text, e.g. "NASM".',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'description',
              type: 'string',
              description: 'Small line under it, e.g. "Certified Trainer".',
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'description'}},
        }),
      ],
      validation: (r) => r.min(1).max(3).warning('The layout is designed for up to 3 credentials'),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Untitled', subtitle: 'Credentials'}),
  },
})
