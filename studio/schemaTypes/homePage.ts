import {defineArrayMember, defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      type: 'array',
      of: [
        defineArrayMember({type: 'hero'}),
        defineArrayMember({type: 'about'}),
        defineArrayMember({type: 'firstWeeks'}),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({
          name: 'description',
          type: 'text',
          rows: 3,
          validation: (r) => r.max(160).warning('Keep it under 160 characters'),
        }),
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Home Page'})},
})
