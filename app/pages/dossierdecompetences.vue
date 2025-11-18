<template>
  <div class="flex flex-row justify-center">
    <div class="w-32 hidden lg:flex">
    </div>
    <div ref="content" class="max-w-screen-sm sm:mt-16 mt-8 mb-16">
      <!-- <div class="bg-hero-pattern h-64"></div> -->
      <img src="../assets/images/about.jpg" class="sm:block hidden mix-blend-screen pb-4 "/>
      <img src="../assets/images/about-mobile.jpg" class="sm:hidden mix-blend-screen pb-0"/>
      <h1 class="text-6xl text-white font-serif italic mb-12 mt-6">Dossier de Compétences</h1>
      <notion-page :page="resume" class="text-white font-light my-4" />
    </div>
    <aside class="ml-48 lg:flex lg:flex-col hidden w-72">
      <div class="sticky top-1/3">
        <h2  class="uppercase font-brand text-lg font-bold text-white">
          Table des matières
        </h2>
        <nav class="mt-4">
          <ul>
            <li
            @click="tableOfContentsHeadingClick(block)"
            v-for="block in resume.results" :key="block.id"
            >
            <a
            role="button"
            v-if="isValidHeading2(block)"
            :class="block.id === currentlyActiveToc ? 'font-bold' : 'font-normal'"
            class="font-sans text-white text-sm  mt-4 block"
            :href="`#${block.id}`"
            > {{ block.heading_2.rich_text[0].plain_text }}</a
            >
            <a
            role="button"
            v-if="isValidHeading3(block)"
            :class="block.id === currentlyActiveToc ? 'font-bold' : 'font-normal'"
            :href="`#${block.id}`"
            class="font-sans text-white text-sm block my-1 ml-4"
            > {{ block.heading_3.rich_text[0].plain_text }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</div>
</template>

<script setup>

const {data: resume} = await useFetch(
'https://api.notion.com/v1/blocks/dd935a2d14864115853a0b936aa7807f/children', {
headers : {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
  'Notion-Version': '2022-06-28',
}
})
const currentlyActiveToc = ref();

const tableOfContentsHeadingClick = (block) => { 
  currentlyActiveToc.value = block.id; 
}

const isValidHeading2 = (block) => { 
  
  if (block.type !== 'heading_2') { 
    return false 
  } 
  
  if (block.heading_2.rich_text.length == 0) { 
    return false 
  } 
  return true 
}
const isValidHeading3 = (block) => { 
  if (block.type !== 'heading_3') { 
    return false 
  } 
  if (block.heading_3.rich_text.length == 0) { 
    return false 
  } 
  return true 
} 
</script>

<style scoped>

.notion-page :deep(.notion-h2) {
  @apply font-brand text-white text-3xl mt-6 mb-4;
}

.notion-page :deep(.notion-h3) {
  @apply  font-semibold text-xl mt-6 mb-4;
}

.notion-page :deep(.notion-paragraph) {
  @apply my-2;
}

.notion-page :deep(.notion-bulleted-list) {
  @apply list-inside;
}

.notion-page :deep(.notion-toggle-content) {
  @apply pl-6;
}

</style>