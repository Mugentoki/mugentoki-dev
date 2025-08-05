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
    '@nuxtjs/device',
    '@nuxtjs/i18n',
  ],

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
    defaults: {
      weights: [100,200,300,400,500,600,700,800,900],
      subsets: [
        'latin',
        'latin-ext',
        'japanese'
      ]
    }
  },

  i18n: {
    restructureDir: 'app/i18n',
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'ja', name: '日本語', file: 'ja.json' }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      fallbackLocale: 'en',
    },
  },

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
  },

  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  typescript: {
    typeCheck: true
  },
})