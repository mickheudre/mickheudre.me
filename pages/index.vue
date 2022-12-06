<template>
  <div class="flex flex-col justify-center items-center mx-8 min-h-screen">
    <div class=" max-w-screen-sm mb-16">
      <!-- <div class="bg-hero-pattern h-64"></div> -->
      <img src="../assets/images/heading.jpg" alt="mickael heudre" class="mix-blend-screen h-72 py-8"/>
      
      <div v-for="block in content.results" :key="block.id"> 
        <h1 v-if="isValidHeading1(block)" class="font-brand text-white text-5xl mt-2 mb-6">
          {{ block.heading_1.text[0].text.content }}
        </h1>
        <paragraph v-if="isValidParagraph(block)" class="font-sans font-light text-white my-2" v-bind:block="block">
          <!-- <span v-for="text in block.paragraph.text" :key="text.text.content"> {{ text.text.content }} </span> -->
        </paragraph>
      </div>
      <nuxt-link to="about" class="text-white font-semibold hover:underline">En savoir plus</nuxt-link>
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
    const content = await $axios.$get('https://api.notion.com/v1/blocks/419a238bfa0f46fb802ce0f2e1feaa5d/children', {
    })
    return { content }
  },
  methods: {
    isValidParagraph(block) {
      console.log(block.type)
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
      titre: 'Mickaël Heudre',
      meta: [
      // `hid` est un identifiant unique. N'utilisez pas `vmid` pour cela car cela ne marchera pas.
      {
        hid: 'description',
        name: 'description',
        content: 'Je crée des applications pour ordinateurs et mobiles. J\'interviens à l\'intersection du développement, du design et du management de produits'
      }
      ]
    }
  }
}
</script>
