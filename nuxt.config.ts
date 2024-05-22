import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import axios from 'axios'
// create a function to fetch the routes from the API
const getProjectRoutes = async () => {
  const response = await axios.get(
    'https://admin.isc-mexico.com/api/projects'
  );

  // return the array of routes
  return response?.data?.data.map((post) => `/proyecto/${post.slug}`);
};

export default defineNuxtConfig({
  ssr: true,

  hooks: {
    async 'nitro:config'(nitroConfig) {
      // fetch the routes from our function above
      const slugs = await getProjectRoutes();
      // add the routes to the nitro config
      nitroConfig.prerender.routes.push(...slugs);
    },
  },

  nitro: {
    prerender: {
      fallback: '404.html',  // Página de fallback
    },
  },

  app: {
    
    head: {
      htmlAttrs: {
        lang: 'es',
      },

      title: 'ISC Ingeniería Servicios & Construcción',

      meta: [
        { 'http-equiv': 'content-language', content: 'es' },
        { name: 'description', content: 'En ISC: Ingeniería Servicios & Construcción desarrollamos los proyectos de mayor complejidad técnica, mejorando la calidad de vida de las personas y potenciando el desarrollo económico.' }, 
        { property: 'og:image', content: 'https://isc-mexico.com/og-image.jpg' },
      ],

      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' },
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

  // nitro: {
  //   prerender: {
  //     routes: ['/proyecto/bridge-river']
  //   }
  // }
})