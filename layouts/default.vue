<template>
  <div id="default" class="min-h-screen bg-primary">
  <div v-if="$route.path != '/'" class="transform fixed top-2/4 -left-16 -rotate-90 hidden sm:block">
    <nuxt-link to="/" class="font-sans font-extralight text-white text-lg mx-2">Mickaël Heudre</nuxt-link>
    <span class="font-sans font-extralight text-white text-lg mx-2">-</span>
    <nuxt-link to="resume" class="font-sans font-extralight text-white text-lg mx-2">CV</nuxt-link>
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
    <Nuxt />
  </div>
</template>
<style>
body {
  scroll-behavior: smooth;
}
</style>

