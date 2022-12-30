// const fs = require('fs')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Supply Angles',
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl',
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
        href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap',
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
    { src: '~/plugins/custom-validation', ssr: false },
    { src: '~/plugins/vue-multiselect', ssr: false },
    { src: '~/plugins/vue-toast', mode: 'client' },
    { src: '~/plugins/vue-whatsapp', ssr: false },
  ],

  buildDir: 'nuxt-dist',

  axios: {
    https: true,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources'],

  styleResources: {
    scss: ['~/assets/css/_variables.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'bootstrap-vue/nuxt',
    'nuxt-vuex-localstorage',
    'vue-social-sharing/nuxt',
    'cookie-universal-nuxt',
    [
      '@nuxtjs/moment',
      { defaultLocale: 'Africa/Cairo', locales: ['ar'], timezone: true },
    ],
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
            // inject: fs.readFileSync('./serviceWorker.js'),
          },
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
    babel: {
      compact: true,
    },
    postcss: false,
  },
}
