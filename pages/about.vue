<template>
  <div class="flex flex-col justify-center items-center  min-h-screen">
    <div class="max-w-screen-sm sm:mt-16 pt-16 mb-8">
      <!-- <div class="bg-hero-pattern h-64"></div> -->
       <img src="../assets/images/runner.png" alt="abstract image" class="h-64"/>

      <div v-for="block in content.results" :key="block.id"> 
        <h1 v-if="isValidHeading1(block)" class="font-brand font-bold text-white text-3xl my-6">
        {{ block.heading_1.text[0].text.content }}
      </h1>
        <paragraph v-if="isValidParagraph(block)" class="font-sans font-light text-white my-2" v-bind:block="block">
        <!-- <span v-for="text in block.paragraph.text" :key="text.text.content"> {{ text.text.content }} </span> -->
        </paragraph>
      </div>
    </div>
  </div>
</template>

<script>
import Paragraph from '../components/Notion/Paragraph'
export default {
  components: { Paragraph },
  data() {
    return {
      content: {}
    }
  },
  async asyncData({ $axios }) {
  const content = await $axios.$get('https://api.notion.com/v1/blocks/9cd620de632e44129ea8305e431da7fa/children', {
  })
  return { content }
},
methods: {
  isValidParagraph(block) {
    if (block.type !== 'paragraph') {
      return false
    }
    if (block.paragraph.text.length == 0) {
      return false
    }
    return true
  },
  isValidHeading1(block) {
    if (block.type !== 'heading_1') {
      return false
    }
    if (block.heading_1.text.length == 0) {
      return false
    }
    return true
  }
},
 head() {
      return {
        titre: 'À propos de ce site',
        meta: [
          // `hid` est un identifiant unique. N'utilisez pas `vmid` pour cela car cela ne marchera pas.
          {
            hid: 'description',
            name: 'description',
            content: 'Ce site a été conçu avec soin et s\'inscrit dans une démarche de design responsable. Il est développé avec Nuxt et Tailwind et utilise Notion et son API pour le contenu.'
          }
        ]
      }
 }
}
</script>
