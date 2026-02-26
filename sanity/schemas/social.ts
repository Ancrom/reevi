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
    defineField({
      name: 'link',
      title: 'Ссылка или Email',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return true
          const isUrl = /^https?:\/\/\S+/.test(value)
          const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          if (isUrl || isEmail) {
            return true
          }
          return 'Введите валидный URL (с http/https) или Email адрес'
        }),
    }),
  ],
})
