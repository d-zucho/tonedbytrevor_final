import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      type: 'array',
      of: [
        defineArrayMember({type: 'aboutHero'}),
        defineArrayMember({type: 'myStory'}),
        defineArrayMember({type: 'method'}),
        defineArrayMember({type: 'principles'}),
        defineArrayMember({type: 'credentials'}),
        defineArrayMember({type: 'contact'}),
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
  preview: {prepare: () => ({title: 'About Page'})},
})
