
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/sass/app.scss', lang: 'scss' },
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
 manifest: {
   name: 'TirePost',
   display: "standalone",
   short_name: 'TirePset',
   title: 'TirePost',
   'og:title': 'TirePost',
   description: '日頃の愚痴を投稿しよう',
   'og:description': '日頃の愚痴を投稿しよう',
   lang: 'ja',
   theme_color: '#f4fbfe',
   background_color: '#ffffff',
   orientation: "portrait",
   "icons": [
    {
      "src": "/logo_144.png",
      "sizes": "144x144",
      "type": "image/png"
    }
  ]
 },
  build: {
  },
  generate: {
    fallback: true
  },
}
