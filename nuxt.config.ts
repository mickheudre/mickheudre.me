// https://nuxt.com/docs/api/configuration/nuxt-config
import module from './nuxt-notion/module'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: [
    '@nuxtjs/tailwindcss',
    ['./nuxt-notion/module', {output: ".vercel/output/static"}],
    '@nuxt/image',
  ],
  css: ["~/assets/css/fonts.css"],
})