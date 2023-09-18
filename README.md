- Name: @arunpurewal/nuxt
- Package name: @arunpurewal/nuxt
- Description: Nuxt Component Module made with TailwindCSS.

# @arunpurewal/nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@arunpurewal/nuxt?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->

- Button
- Card

## Quick Setup

1. Add `@arunpurewal/nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @arunpurewal/nuxt @nuxtjs/tailwindcss

# Using yarn
yarn add --dev @arunpurewal/nuxt @nuxtjs/tailwindcss

# Using npm
npm install --save-dev @arunpurewal/nuxt @nuxtjs/tailwindcss
```

2. Add `@arunpurewal/nuxt` + `@nuxtjs/tailwindcss` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@arunpurewal/nuxt", "@nuxtjs/tailwindcss"],
});
```

That's it! You can now use @arunpurewal/nuxt in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@arunpurewal/nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@arunpurewal/nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/@arunpurewal/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@arunpurewal/nuxt
[license-src]: https://img.shields.io/npm/l/@arunpurewal/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@arunpurewal/nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
