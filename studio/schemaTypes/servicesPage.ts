import {defineArrayMember, defineField, defineType} from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      type: 'array',
      of: [
        defineArrayMember({type: 'servicesHero'}),
        defineArrayMember({type: 'offerings'}),
        defineArrayMember({type: 'included'}),
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
  preview: {prepare: () => ({title: 'Services Page'})},
})
