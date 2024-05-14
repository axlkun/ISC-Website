import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({

  app: {
    
    head: {
      htmlAttrs: {
        lang: 'es',
      },

      title: 'ISC Ingeniería Servicios & Construcción',

      meta: [
        { 'http-equiv': 'content-language', content: 'es' },
        // ...otras etiquetas meta
      ],

      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' },
      ],
      
    }
  },

  devtools: { enabled: true },

  // hooks: {
  //   'pages:extend'(pages) {
  //     // add a route
  //     pages.push(
  //       {
  //         name: 'proyecto',
  //         path: '/proyectos/:slug',
  //         file: '~/pages/proyectos/[...slug].vue',
  //       }
  //     )
  //   }
  // },

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