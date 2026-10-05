import {defineArrayMember, defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'introText', type: 'text', rows: 3}),
    defineField({
      name: 'details',
      title: 'Contact details',
      description: 'Shown as a list beside the form. Add or remove as many as you need.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              type: 'image',
              description:
                'A simple one-color SVG or transparent PNG, square. It is shown in the brand color, whatever color the file is.',
              options: {accept: 'image/svg+xml,image/png'},
            }),
            defineField({
              name: 'label',
              type: 'string',
              description: 'Small title above the text, e.g. "Call for Support".',
            }),
            defineField({name: 'text', type: 'string', validation: (r) => r.required()}),
            defineField({
              name: 'href',
              title: 'Link (optional)',
              description:
                'Makes the text a link. e.g. https://instagram.com/yourname, tel:+19991234567 or mailto:you@example.com',
              type: 'string',
              validation: (r) =>
                r.custom(
                  (value) =>
                    !value ||
                    /^(https?:\/\/|tel:|mailto:)/.test(value) ||
                    'Start with https://, tel: or mailto:',
                ),
            }),
          ],
          preview: {
            select: {title: 'label', subtitle: 'text', media: 'icon'},
            prepare: ({title, subtitle, media}) => ({title: title || subtitle, subtitle, media}),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({title: title || 'Untitled', subtitle: 'Contact'}),
  },
})
