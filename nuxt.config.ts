// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-primevue',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode',
    "@nuxtjs/seo"
  ],

  css: ['primeicons/primeicons.css','normalize.css/normalize.css'],
  
  imports:{
    dirs: ['./composables/useMarkdown', './composables/useServices','./composables/useLogger']
  },

  site: {
    url: process.env.SITE_URL,
  },
  
  ogImage: {
    fonts: ['Inter:400', 'Inter:700'],
  },

  supabase: {
    redirect: false,
  },

  runtimeConfig: {
    stripeProudctId5BRL: process.env.STRIPE_PRODUCT_ID_5BRL,
    public: {
      nodeEnv: process.env.NODE_ENV,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      siteUrl: process.env.SITE_URL,
    },
  },

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
    importPT: { as: 'lara', from: '@/assets/presets/lara/' }
  }
})