import {defineType, defineField} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'title',
      title: 'Главный заголовок страницы',
      type: 'string',
      initialValue: 'Обо мне',
    }),
    defineField({
      name: 'photo',
      title: 'Фотография',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Описание фото (для SEO)',
          type: 'string',
        },
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'content',
      title: 'Текст страницы',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
          lists: [],
        },
      ],
    }),
  ],
})
