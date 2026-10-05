import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletons = [
  {type: 'homePage', title: 'Home Page'},
  {type: 'aboutPage', title: 'About Page'},
  {type: 'servicesPage', title: 'Services Page'},
  {type: 'siteSettings', title: 'Site Settings'},
]
const singletonTypes = new Set(singletons.map((s) => s.type))

export default defineConfig({
  name: 'default',
  title: 'TonedByTrevor',

  projectId: 'g6398rrc',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...singletons.map(({type, title}) =>
              S.listItem()
                .title(title)
                .id(type)
                .child(S.document().schemaType(type).documentId(type)),
            ),
            ...S.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId()!)),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, {schemaType}) =>
      singletonTypes.has(schemaType)
        ? input.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : input,
  },
})
