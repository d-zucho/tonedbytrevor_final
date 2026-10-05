import {defineArrayMember, defineField, defineType} from 'sanity'

export const myStory = defineType({
  name: 'myStory',
  title: 'My Story',
  type: 'object',
  fields: [
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
    defineField({
      name: 'quote',
      title: 'Pull quote',
      description: 'The large statement shown beside the story.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'quoteLabel',
      title: 'Pull quote label',
      description: 'Small label under the quote, e.g. "The philosophy".',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Untitled', subtitle: 'My Story'}),
  },
})
