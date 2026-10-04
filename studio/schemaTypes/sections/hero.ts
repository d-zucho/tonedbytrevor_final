import {defineArrayMember, defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'title',
      type: 'text',
      rows: 3,
      description: 'Press Enter for each line. The first line is highlighted.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'introText',
      type: 'text',
      rows: 2,
      validation: (r) => r.max(160).warning('Keep it to about 2 lines'),
    }),
    defineField({
      name: 'ctas',
      title: 'Buttons',
      description: 'Up to two. The first is the primary button.',
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
      validation: (r) => r.max(2),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'name', title: 'Name', type: 'string'}),
        defineField({
          name: 'role',
          title: 'Role',
          type: 'string',
          description: 'e.g. "Your Coach"',
          initialValue: 'Your Coach',
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title', media: 'image'},
    prepare: ({title, media}) => ({
      title: title ? title.replace(/\s*\n\s*/g, ' ') : 'Untitled',
      subtitle: 'Hero',
      media,
    }),
  },
})
