// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  devtools: { enabled: true }
})
