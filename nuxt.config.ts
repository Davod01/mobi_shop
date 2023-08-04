// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },

  modules: [
    '@sidebase/nuxt-auth'
  ],

  typescript: {
    shim: false
  },

  plugins: ['/f:/projects/other/mobi_shop/plugins/trpcClient.ts']
})
