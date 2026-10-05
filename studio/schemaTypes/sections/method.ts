import {defineArrayMember, defineField, defineType} from 'sanity'

export const method = defineType({
  name: 'method',
  title: 'Method',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'sideNote',
      description: 'Small line shown opposite the title.',
      type: 'string',
    }),
    defineField({
      name: 'methods',
      description: 'Add or remove as many as you need.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
            defineField({
              name: 'description',
              type: 'text',
              rows: 3,
              validation: (r) => r.max(220).warning('Keep it to about 2 to 3 lines'),
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'description'}},
        }),
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Untitled', subtitle: 'Method'}),
  },
})
