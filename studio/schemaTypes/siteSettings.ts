import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      type: 'image',
      fields: [defineField({name: 'alt', type: 'string', validation: (r) => r.required()})],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'href', type: 'string', validation: (r) => r.required()}),
          ],
          preview: {select: {title: 'label', subtitle: 'href'}},
        }),
      ],
    }),
    defineField({
      name: 'contactButton',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string', initialValue: 'Contact'}),
        defineField({name: 'href', type: 'string'}),
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Site Settings'})},
})
