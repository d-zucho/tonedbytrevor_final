import {defineArrayMember, defineField, defineType} from 'sanity'

export const included = defineType({
  name: 'included',
  title: 'Included',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'introText', type: 'text', rows: 3}),
    defineField({
      name: 'items',
      title: 'Included items',
      description: 'Shown as a checklist in two columns, so an even number looks most balanced.',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Untitled', subtitle: 'Included'}),
  },
})
