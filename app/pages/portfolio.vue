<template>
  <div class="flex flex-row justify-center">
    <div class="w-32 hidden lg:flex">
    </div>
    <div ref="content" class="max-w-screen-sm sm:mt-16 mt-8 mb-16">
      <!-- <div class="bg-hero-pattern h-64"></div> -->
      <img src="../assets/images/about.jpg" class="sm:block hidden mix-blend-screen pb-4 pt-12"/>
      
      <img src="../assets/images/about-mobile.jpg" class="sm:hidden mix-blend-screen pb-0"/>
      <h1 class="text-6xl text-white font-serif italic mb-12 mt-6">Portfolio</h1>
      <notion-page :page="portfolio" class="text-white font-light my-4"/>
    </div>
  </div>
</template>

<script setup>
const {data: portfolio} = await useFetch(
'https://api.notion.com/v1/blocks/281f0c6a49ae4402953cac87bcea8337/children', {
headers : {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
    'Notion-Version': '2022-06-28',
}
})
</script>

<style scoped>
.notion-page :deep(.notion-h3) {
    @apply font-brand text-white text-3xl mt-6 mb-4;
}

.notion-page :deep(.notion-img) {
  @apply w-3/4 mx-auto my-8;
}
.notion-page :deep(.notion-video) {
  @apply  w-full md:w-2/3 my-8 mx-auto;
}

.notion-page :deep(p) {
  @apply my-2;
}
</style>
