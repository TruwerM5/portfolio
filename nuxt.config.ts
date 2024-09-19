// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/style.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Lato: [100,200,300,400,700,900]
    }
  },
  app: {
    head: {
      link: [{
        rel: 'icon',
        type: 'image/png',
        href: '/images/favicon.png'
      }],
      title: "Ilsur Khalimov"
    }
  }
})
