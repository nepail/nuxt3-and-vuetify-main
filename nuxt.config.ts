import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app:{
    head:{
      title: 'esball',
      meta:[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'esbll description' },
        { name: 'keywords', content: 'esball keywords' },
      ]
    }
  },
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
  customVariables: ['~/assets/css/scss/variables.scss', '~/assets/css/scss/all.scss'],
  treeShake: true,
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
