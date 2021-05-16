<template>
  <div class="flex flex-col justify-center items-center mx-8">
    <div class=" max-w-screen-sm">
      <!-- <div class="bg-hero-pattern h-64"></div> -->
      <img src="../assets/images/heading.jpg" class="mix-blend-screen h-72 py-8"/>
      <div v-for="block in content.results" :key="block.id"> 
        <h1 v-if="isValidHeading1(block)" class="font-brand text-white text-5xl my-2">
        {{ block.heading_1.text[0].text.content }}
      </h1>
        <paragraph v-if="isValidParagraph(block)" class="font-sans text-white my-2" v-bind:block="block">
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
  const content = await $axios.$get('https://api.notion.com/v1/blocks/419a238bfa0f46fb802ce0f2e1feaa5d/children', {
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
        titre: 'Mickaêl Heudre',
        meta: [
          // `hid` est un identifiant unique. N'utilisez pas `vmid` pour cela car cela ne marchera pas.
          {
            hid: 'description',
            name: 'description',
            content: 'Mickaël Heudre crée des applications pour ordinateurs et mobiles'
          }
        ]
      }
 }
}
</script>
