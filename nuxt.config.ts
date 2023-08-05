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
    'vuetify-nuxt-module',
    '@vueuse/nuxt',
    '@nuxtjs/robots'
  ],

  // routeRules: {
  //   '/': { prerender: true },
  //   '/about': { prerender: true }
  // },

  auth: {
    origin: process.env.ORIGIN,
    provider: {
      type: 'authjs'
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'fa'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico'
        }
      ]
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
  robots: {
    /* module options */
  },

  devtools: {
    enabled: false
  }

  // plugins: ['/f:/projects/other/mobi_shop/plugins/01.trpcClient.ts']
})
