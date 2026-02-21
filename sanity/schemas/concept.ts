import {defineType, defineField} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const concept = defineType({
  name: 'concept',
  title: 'Concept',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'concept'}),
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Обложка',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'relatedImages',
      title: 'Дополнительные изображения',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'caption',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
})
