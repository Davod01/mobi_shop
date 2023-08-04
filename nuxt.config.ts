// https://nuxt.com/docs/api/configuration/nuxt-config
import { fa } from 'vuetify/locale'

export default defineNuxtConfig({
  build: {
    transpile: [
      'trpc-nuxt',
      'gsap'
    ]
  },
  modules: [
    '@pinia/nuxt',
    // '@nuxtjs/i18n',
    '@nuxt/devtools',
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt',
    'vuetify-nuxt-module'
  ],
  typescript: {
    shim: false
  }
})
