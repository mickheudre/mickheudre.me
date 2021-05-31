<template>
  <div class="flex flex-col justify-center items-center mx-8">
    <div class="max-w-screen-sm sm:mt-16 mt-8 mb-16">
      <!-- <div class="bg-hero-pattern h-64"></div> -->
       <img src="../assets/images/about.png" class="sm:block hidden mix-blend-screen pb-4 "/>
       <img src="../assets/images/about-mobile.png" class="sm:hidden mix-blend-screen pb-0"/>

      <div v-for="block in content.results" :key="block.id"> 
        <h1 v-if="isValidHeading1(block)" class="font-brand font-bold text-white text-4xl my-6">
            {{ block.heading_1.text[0].text.content }}
        </h1>
        <h2 v-if="isValidHeading2(block)" class="font-brand font-bold text-white text-4xl mt-8 mb-6">
            {{ block.heading_2.text[0].text.content }}
        </h2>
        <h3 v-if="isValidHeading3(block)" class="font-sans font-semibold text-white text-lg mt-6 mb-2">
            {{ block.heading_3.text[0].text.content }}
        </h3>
        <paragraph v-if="isValidParagraph(block)" class="font-sans text-white text-md my-2" v-bind:block="block">
        <!-- <span v-for="text in block.paragraph.text" :key="text.text.content"> {{ text.text.content }} </span> -->
        </paragraph>
        <p v-if="isValidBulletedList(block)" class="font-sans text-white my-1" >
          {{ block.bulleted_list_item.text[0].text.content }}
        </p>
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
  const content = await $axios.$get('https://api.notion.com/v1/blocks/a5b1ae11dbe24ae7bccb2523057e4c1f/children', {
  })
  return { content }
},
methods: {
  isValidBulletedList(block) {
    if (block.type !== 'bulleted_list_item') {
      return false
    }
    if (block.bulleted_list_item.text.length == 0) {
      return false
    }
    return true
  },
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
  },
  isValidHeading2(block) {
    if (block.type !== 'heading_2') {
      return false
    }
    if (block.heading_2.text.length == 0) {
      return false
    }
    return true
  },
  isValidHeading3(block) {
    if (block.type !== 'heading_3') {
      return false
    }
    if (block.heading_3.text.length == 0) {
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
