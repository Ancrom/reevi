import {defineType, defineField} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const illustration = defineType({
  name: 'illustration',
  title: 'Illustration',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'illustration'}),
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {hotspot: true},
			validation: (r) => r.required(),
    }),
    defineField({name: 'description', title: 'Описание', type: 'text'}),
    defineField({name: 'tags', title: 'Теги', type: 'array', of: [{type: 'string'}]}),
    defineField({
      name: 'relatedArtworks',
      title: 'Связанные работы',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'illustration'}]}],
    }),
  ],
})
