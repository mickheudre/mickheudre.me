<template>
  <div class="flex flex-col justify-center items-center mx-8 min-h-screen">
    <div class=" max-w-screen-sm mb-16">
      <!-- <div class="bg-hero-pattern h-64"></div> -->
      <img src="../assets/images/heading.jpg" alt="mickael heudre" class="mix-blend-screen h-72 py-8"/>
      <NotionPage class=" text-white font-light" :page="headline" />
      <nuxt-link to="about" class="text-white font-semibold hover:underline">En savoir plus</nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">

const {data: headline} = await useFetch(
'https://api.notion.com/v1/blocks/419a238bfa0f46fb802ce0f2e1feaa5d/children', {
headers : {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
  'Notion-Version': '2022-06-28',
}
})


</script>

<style scoped>
.notion-page :deep(.notion-h1) {
  @apply font-brand text-white text-5xl mt-2 mb-6;
}

.notion-page :deep(.notion-bulleted-list) {
  @apply list-inside;
}

.notion-page :deep(.notion-paragraph) {
  @apply my-2;
}

</style>

