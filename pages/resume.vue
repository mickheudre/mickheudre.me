<template>
  <div class="flex flex-row justify-center">
      <div class="w-32 hidden lg:flex">
  </div>
    <div ref="content" class="max-w-screen-sm sm:mt-16 mt-8 mb-16">
      <!-- <div class="bg-hero-pattern h-64"></div> -->
       <img src="../assets/images/about.png" class="sm:block hidden mix-blend-screen pb-4 "/>
       <img src="../assets/images/about-mobile.png" class="sm:hidden mix-blend-screen pb-0"/>

      <div v-for="block in content.results" :key="block.id"> 
        <h1 v-if="isValidHeading1(block)" class="font-brand font-bold text-white text-4xl my-6">
            {{ block.heading_1.text[0].text.content }}
        </h1>
        <h2 v-if="isValidHeading2(block)" :id="block.id" class="font-brand font-bold text-white text-4xl mt-8 mb-6">
            {{ block.heading_2.text[0].text.content }}
        </h2>
        <h3 v-if="isValidHeading3(block)" :id="block.id" class="font-sans font-semibold text-white text-lg mt-6 mb-2">
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

    <aside class="ml-32 lg:flex lg:flex-col px-4 hidden w-72">
      <div class="sticky top-1/3">
        <h2  class="uppercase font-brand text-lg font-bold text-white">
          Table of contents
        </h2>
        <nav class="mt-4">
          <ul>
            <li
            @click="tableOfContentsHeadingClick(block)"
              v-for="block in content.results" :key="block.id"
            >
              <a
                role="button"
                v-if="isValidHeading2(block)"
                :class="block.id === currentlyActiveToc ? 'font-bold' : 'font-normal'"
                class="font-sans text-white text-sm  mt-4 block"*
                :href="`#${block.id}`"
                > {{ block.heading_2.text[0].text.content }}</a
              >
               <a
                role="button"
                v-if="isValidHeading3(block)"
                :class="block.id === currentlyActiveToc ? 'font-bold' : 'font-normal'"
                :href="`#${block.id}`"
                class="font-sans text-white text-sm block my-1 ml-4"
                > {{ block.heading_3.text[0].text.content }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script>
import Paragraph from '../components/Notion/Paragraph'
export default {
  components: { Paragraph },
  data() {
    return {
      content: {},
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.content,
        threshold: 0
      }
    }
  },
  async asyncData({ $axios }) {
  const content = await $axios.$get('https://api.notion.com/v1/blocks/a5b1ae11dbe24ae7bccb2523057e4c1f/children', {
  })
  return { content }
},
mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    document
      .querySelectorAll("h2[id], h3[id]")
      .forEach(section => {
        console.log(section)
        if (this.currentlyActiveToc === "") {
          this.currentlyActiveToc = section.id
        }
        this.observer.observe(section);
      });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
methods: {
  tableOfContentsHeadingClick(block) {
    this.currentlyActiveToc = block.id;
  },
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
