// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils'
  ],

  typescript: {
    typeCheck: true
  },

  app: {
    rootId: 'mugentoki',
  },

  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],

  css: [
    '~/assets/css/main.css',
  ],

  fonts: {
    provider: 'bunny',
  }
})