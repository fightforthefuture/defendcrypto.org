import config from './config'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: config.siteTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' }, // TODO: choose theme color

  /*
  ** Router configuration
  */
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/analytics.js', ssr: false },
    { src: '~/plugins/hash-link-fix.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-US'
        }
      ],
      parsePages: false,
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en'
      },
      vueI18nLoader: true
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  styleResources: {
    scss: [
      '~assets/css/_setup.scss'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // Parse yaml in i18n blocks
      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        type: "javascript/auto",
        loader: ["@kazupon/vue-i18n-loader", "yaml-loader"]
      })
    }
  },
  vendor: [
    'babel-polyfill'
  ],
  babel: {
    presets: [
      ['vue-app', {
        useBuiltIns: true,
        targets: { ie: 9, uglify: true }
      }]
    ]
  },

  /*
  ** Generate Routes
  */
  generate: {
    fallback: "error.html"
  }
}
