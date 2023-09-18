import { defineNuxtModule, createResolver, installModule, addComponentsDir } from '@nuxt/kit'

export interface ModuleOptions {
  css: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@arunpurewal/nuxt',
    configKey: 'arunpurewalNuxt'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    css: true
  },

  async setup(options) {
    const resolver = createResolver(import.meta.url)

    // It will add @nuxtjs/tailwindcss to the project
    await installModule('@nuxtjs/tailwindcss', {
      /**
       * Here, you specify where your config is.
       * By default, the module have a configPath relative
       * to the current path, ie the playground
       * (or the app using your module)
       */
      cssPath: options.css ? resolver.resolve("./runtime/assets/css/tailwind.css") : false,
      configPath: resolver.resolve('../tailwind.config'),
    })

    // Allows the components to be used gloabally, in this instance in the playground without importing

    await addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      pathPrefix: false,
      prefix: '',
      global: true
    })
  }
})