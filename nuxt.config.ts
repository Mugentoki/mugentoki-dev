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
    '@nuxt/test-utils',
    '@pinia/nuxt',
    '@nuxtjs/device'
  ],

  typescript: {
    typeCheck: true
  },

  app: {
    rootId: 'mugentoki',
  },

  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  fonts: {
    provider: 'bunny',
    defaults: {
      weights: [100,200,300,400,500,600,700,800,900],
      subsets: [
        'latin',
        'latin-ext',
        'japanese'
      ]
    }
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

  icon: {
    size: '1.563rem',
    customCollections: [
      {
        prefix: 'mugentoki',
        dir: './assets/icons/mugentoki'
      },
    ],
  },

  image: {
    quality: 80,
    format: ['webp']
  }
})