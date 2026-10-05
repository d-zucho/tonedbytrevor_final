import {defineArrayMember, defineField, defineType} from 'sanity'

export const principles = defineType({
  name: 'principles',
  title: 'Principles',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'introText', type: 'text', rows: 3}),
    defineField({
      name: 'principles',
      description: 'Shown in two columns, so an even number looks most balanced.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              description: 'Short tag above the title, e.g. "Form" or "Honesty".',
            }),
            defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
            defineField({
              name: 'description',
              type: 'text',
              rows: 3,
              validation: (r) => r.max(220).warning('Keep it to about 2 to 3 lines'),
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'label'}},
        }),
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Untitled', subtitle: 'Principles'}),
  },
})
