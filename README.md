# IMPORTANT!
This package is being used for learning purposes at the moment! You should NOT use it in production at this point.

# sanity-plugin-custom-seo

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
npm install sanity-plugin-custom-seo
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {customSeo} from 'sanity-plugin-custom-seo'

export default defineConfig({
  plugins: [customSeo()], 
})
```

Then you can use the `customSeo` type in any field you want to:

```ts
const myDocument = {
  type: "post",
  name: "post",
  fields: [
    {
      name: "seo",
      type: "customSeo",
    },
  ]
```

## License

[MIT](LICENSE) © Luiz Cláudio

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.


### Release new version

Run ["CI & Release" workflow](https://github.com/lcnogueira/sanity-plugin-custom-seo/actions/workflows/main.yml).
Make sure to select the main branch and check "Release new version".

Semantic release will only release on configured branches, so it is safe to run release on any branch.
