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
              type: 'illustration',
              title: 'Иллюстрации',
              id: 'illustrations-orderable',
              S,
              context,
            }),

            orderableDocumentListDeskItem({
              type: 'concept',
              title: 'Концепт',
              id: 'concepts-orderable',
              S,
              context,
            }),

            orderableDocumentListDeskItem({
              type: 'social',
              title: 'Социальные сети',
              id: 'socials-orderable',
              S,
              context,
            }),
            S.listItem()
              .title('Обо мне')
              .id('aboutPage')
              .child(S.document().schemaType('about').documentId('about')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      {
        id: 'illustration-default',
        title: 'Illustration',
        schemaType: 'illustration',
        value: {category: 'illustration'},
      },
      {
        id: 'concept-default',
        title: 'Concept',
        schemaType: 'concept',
        value: {category: 'concept'},
      },
      {
        id: 'about-default',
        title: 'About',
        schemaType: 'about',
        value: {category: 'about'},
      },
      {
        id: 'social-default',
        title: 'Social',
        schemaType: 'social',
        value: {category: 'social'},
      },
    ],
  },
})
