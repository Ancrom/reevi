import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'reevi',
	basePath: '/',

  projectId: 'begf0yyf',
  dataset: 'artworks',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Контент')
          .items([
            orderableDocumentListDeskItem({
              type: 'artworks',
              title: 'Artworks',
              S,
              context,
            }),
            ...S.documentTypeListItems().filter((item) => item.getId() !== 'artworks'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
