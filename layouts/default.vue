<template>
  <div id="default" class="min-h-screen  bg-primary">
  <div v-if="$route.path != '/'" class="fixed w-full bg-primary top-0 hidden sm:flex flex-row justify-between z-50">
    <nuxt-link to="/" class="font-name text-white text-xl mx-12 my-8">Mickaël Heudre</nuxt-link>
    <div class="flex flex-row my-8 mx-16"> 
      <nuxt-link to="portfolio" class="font-serif italic tracking-wide text-white text-xl mx-6 hover:underline">Portfolio</nuxt-link>
      <nuxt-link to="resume" class="font-serif italic tracking-wide  text-white text-xl mx-6 hover:underline">CV</nuxt-link>

    </div>
  </div>
    <!-- <div>
      <ul class="flex flex-row w-full justify-end space-x-4 px-8 py-4">
        <li>
          <nuxt-link class="text-white text-lg font-semibold tracking-wide" to="">Projets</nuxt-link>
          </li>
          <li>
          <nuxt-link class="text-white text-lg font-semibold tracking-wide" to="">A propos</nuxt-link>
        </li>
      </ul>
    </div> -->
    <Nuxt class="sm:px-0 px-8"/>
  </div>
</template>
<style>
body {
  scroll-behavior: smooth;
}
</style>

