import {definePlugin} from 'sanity'

import {seoTypes} from './schemas'

// interface MyPluginConfig {
//   /* nothing here yet */
// }

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {customSeo} from 'sanity-plugin-custom-seo'
 *
 * export default defineConfig({
 *   plugins: [customSeo()],
 * })
 * ```
 */
export const customSeo = definePlugin(() => {
  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-custom-seo')
  return {
    name: 'sanity-plugin-custom-seo',
    schema: {
      types: seoTypes,
    },
  }
})
