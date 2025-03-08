import {defineField, defineType} from 'sanity'

import SEODescription from '../components/SEODescription'
import SEOTitle from '../components/SEOTitle'

export default defineType({
  title: 'SEO & Metadata',
  name: 'customSeo',
  options: {
    collapsible: true,
  },
  type: 'object',
  fields: [
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      initialValue: false,
      description:
        "If checked, this document won't be indexed by search engines and it won't render in the sitemap file",
    }),
    defineField({
      name: 'metaTitle',
      title: 'Title',
      type: 'string',
      components: {
        input: SEOTitle,
      },
    }),
    defineField({
      name: 'metaDescription',
      title: 'Description',
      type: 'text',
      rows: 3,
      components: {
        input: SEODescription,
      },
    }),
    defineField({
      name: 'metaImage',
      title: 'Meta Image',
      type: 'image',
    }),
    defineField({
      name: 'seoKeywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'openGraph',
      title: 'Open Graph',
      type: 'customOpenGraph',
    }),
    defineField({
      name: 'additionalMetaTags',
      title: 'Additional Meta Tags',
      type: 'array',
      of: [{type: 'customMetaTag'}],
    }),
    defineField({
      name: 'twitter',
      title: 'X.com',
      type: 'customTwitter',
    }),
  ],
})
