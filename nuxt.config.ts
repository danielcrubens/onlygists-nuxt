// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-primevue',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
  ],

  css: ['primeicons/primeicons.css','normalize.css/normalize.css'],
  
  googleFonts: {
    base64: true,
    fontsDir: 'assets/fonts',
    overwriting: true,
    families: {
      Inter: [300, 500, 800],
    },
  },

  primevue: {
    options: { unstyled: true },
    importPT: { as: "lara", from: "@/assets/presets/lara/" }
  }
})
