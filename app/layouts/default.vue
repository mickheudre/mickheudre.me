<template>
  <div id="default" class="min-h-screen  bg-primary">
  <div v-if="$route.path != '/'" class="fixed w-full bg-primary top-0 hidden sm:flex flex-row justify-between z-50">
    <nuxt-link to="/" class="font-name text-white text-xl mx-12 my-8">Mickaël Heudre</nuxt-link>
    <div class="flex flex-row my-8 mx-16"> 
      <nuxt-link to="portfolio" class="font-serif italic tracking-wide text-white text-xl mx-6 hover:underline">Portfolio</nuxt-link>
      <nuxt-link to="resume" class="font-serif italic tracking-wide  text-white text-xl mx-6 hover:underline">CV</nuxt-link>

    </div>
  </div>
    <NuxtPage class="sm:px-0 px-8"/>
  </div>
</template>
<style>
body {
  scroll-behavior: smooth;
}


</style>

