// https://nuxt.com/docs/api/configuration/nuxt-config
import { fa } from 'vuetify/locale'

export default defineNuxtConfig({
  build: {
    transpile: [
      'trpc-nuxt',
      'gsap'
    ]
  },

  css: [
    '~/assets/mobi.scss',
    '~/assets/animation.scss'
  ],

  modules: [
    '@pinia/nuxt',
    // '@nuxtjs/i18n',
    '@nuxt/devtools',
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt',
    'vuetify-nuxt-module'
  ],

  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true }
  },

  auth: {
    provider: {
      type: 'authjs'
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
    // pageTransition: { name: 'slide-in-right', mode: 'out-in' }
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
  },

  devtools: {
    enabled: true
  },

  plugins: ['/f:/projects/other/mobi_shop/plugins/01.trpcClient.ts']
})
