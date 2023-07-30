// https://nuxt.com/docs/api/configuration/nuxt-config
import { fa } from 'vuetify/locale'

export default defineNuxtConfig({
  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },

  css: [
    '~/assets/mobi.scss',
    '~/assets/animation.scss'
  ],

  modules: [
    '@pinia/nuxt',
    // '@nuxtjs/i18n',
    '@sidebase/nuxt-auth',
    'vuetify-nuxt-module'
  ],

  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
    pageTransition: { name: 'fab-transition', mode: 'out-in' }
  },

  typescript: {
    shim: false
  },

  // i18n: {
  //   vueI18n: './I18n/i18n.config.ts'
  // }

  vuetify: {
    vuetifyOptions: {
      locale: {
        locale: 'fa',
        messages: { fa }
      }
    }
  }

})
