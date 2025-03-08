import {defineField} from 'sanity'

export default defineField({
  name: 'customMetaTag',
  title: 'Meta tag',
  type: 'object',
  fields: [
    defineField({
      name: 'customMetaAttributes',
      title: 'Meta Attributes',
      type: 'array',
      of: [{type: 'metaAttribute'}],
    }),
  ],
  preview: {
    select: {
      title: 'attributeName',
      metaTags: 'metaAttributes',
    },
    prepare({metaTags}) {
      return {
        title:
          metaTags && metaTags[0]?.attributeValueString
            ? metaTags[0]?.attributeValueString
            : 'Meta Tag',
      }
    },
  },
})
