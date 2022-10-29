const fs = require('fs')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'مناقص | المناقصة كما يجب ان تكون',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap',
      },
    ],
    script: [
      {
        src: 'https://accounts.google.com/gsi/client',
      },
    ],
  },

  loading: {
    color: '#EA871B',
    height: '4px',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bootstrap-vue' },
    { src: '~/plugins/axios' },
    { src: '~/plugins/custom-validation' },
    { src: '~/plugins/vue-multiselect' },
    { src: '~/plugins/vue-toast', mode: 'client' },
    { src: '~/plugins/vue-tags', ssr: false },
    { src: '~/plugins/vue-pusher' },
    { src: '~/plugins/vue-video-player' },
    { src: '~/plugins/vue-oauth', ssr: false },
    { src: '~/plugins/vue-whatsapp', ssr: false },
  ],

  buildDir: 'nuxt-dist',

  axios: {
    https: true,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    'nuxt-vuex-localstorage',
    'cookie-universal-nuxt',
    '@nuxtjs/moment',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBrs_JT4LF7gYDN7OCYzCQM7igW-uFo2R8',
          authDomain: 'munaqes-e40ae.firebaseapp.com',
          projectId: 'munaqes-e40ae',
          storageBucket: 'munaqes-e40ae.appspot.com',
          messagingSenderId: '15282782606',
          appId: '1:15282782606:web:f1febad63237c10f6764df',
          measurementId: 'G-7YLH3ZKLHK',
        },
        services: {
          messaging: {
            createServiceWorker: true,
            fcmPublicVapidKey:
              'BF2PaYxkSRDB7BLmMidFCOnfSW4c1tMywe36ZKjO3KZP3KwNlXCFS4OjlKDT1w6zECrwKaUaZApElUZY_npSB7M',
            inject: fs.readFileSync('./serviceWorker.js'),
          },
        },
      },
    ],
    [
      'nuxt-i18n',
      {
        lazy: true,
        loadLanguagesAsync: true,
        locales: [
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en/index.js',
            dir: 'ltr',
          },
          {
            name: 'Arabic',
            code: 'ar',
            iso: 'ar-AR',
            file: 'ar/index.js',
            dir: 'rtl',
          },
        ],
        langDir: 'locales/',
        defaultLocale: 'ar',
        fallbackLocale: 'ar',
        strategy: 'prefix',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
        },
        rootRedirect: 'ar',
        detectBrowserLanguage: false,
      },
    ],
  ],

  router: {
    middleware: 'routerMiddleware',
  },

  //auth: {
  //  strategies: {
  //    google: {
  //      clientId:
  //        '15282782606-aocvcjtntbkrjious32p1bf3ld7ib023.apps.googleusercontent.com',
  //      clientSecret: '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',
  //      codeChallengeMethod: '',
  //      responseType: 'code',
  //      accessType: 'offline',
  //      scope: ['profile', 'email'],
  //      redirectUri: undefined,
  //    },
  //  },
  //},
  //
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
    babel: {
      compact: true,
    },
    publicPath: 'nuxt-dist/dist/client',
  },
}
