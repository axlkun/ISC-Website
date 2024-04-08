import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({

  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { 'http-equiv': 'content-language', content: 'es' },
        // ...otras etiquetas meta
      ],

      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:wght@400;700;900&family=Lato:wght@400;700;900&family=Manrope:wght@400;500;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap' },
      ],
      
    }
  },

  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})