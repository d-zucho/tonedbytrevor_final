import {defineArrayMember, defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'caption', type: 'string'}),
      ],
    }),
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'body',
      description: 'Press Enter to start a new paragraph.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [],
          },
        }),
      ],
    }),
    defineField({name: 'listTitle', title: 'List subtitle', type: 'string'}),
    defineField({
      name: 'credentials',
      description: 'Certifications, accreditations or short stats. Add or remove as many as you need.',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
  preview: {
    select: {title: 'title', media: 'image'},
    prepare: ({title, media}) => ({title: title || 'Untitled', subtitle: 'About', media}),
  },
})
