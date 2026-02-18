import {defineType, defineField} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const artworks = defineType({
  name: 'artworks',
  title: 'Artworks',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'artworks'}),
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
    }),
    defineField({name: 'description', title: 'Описание', type: 'text'}),
    defineField({name: 'tags', title: 'Теги', type: 'array', of: [{type: 'string'}]}),
    defineField({
      name: 'relatedArtworks',
      title: 'Связанные работы',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'artworks'}]}],
    }),
  ],
})
