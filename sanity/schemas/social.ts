import {defineType, defineField} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const social = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'social'}),
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Иконка',
      type: 'image',
      options: {hotspot: true},
      validation: (r) => r.required(),
    }),
    defineField({name: 'link', title: 'Ссылка', type: 'url', validation: (r) => r.required()}),
  ],
})
