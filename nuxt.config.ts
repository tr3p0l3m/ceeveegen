// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'CV Builder — AI Powered',
      meta: [
        { name: 'description', content: 'Build a polished CV in minutes, with AI-assisted writing.' }
      ]
    }
  }
})
