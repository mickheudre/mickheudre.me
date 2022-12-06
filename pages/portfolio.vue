<template>
  <div class="flex flex-row justify-center">
    <div class="w-32 hidden lg:flex">
    </div>
    <div ref="content" class="max-w-screen-sm sm:mt-16 mt-8 mb-16">
      <!-- <div class="bg-hero-pattern h-64"></div> -->
      <img src="../assets/images/about.jpg" class="sm:block hidden mix-blend-screen pb-4 pt-12"/>
      
      <img src="../assets/images/about-mobile.jpg" class="sm:hidden mix-blend-screen pb-0"/>
      <h1 class="text-6xl text-white font-serif italic mb-12 mt-6"> {{ title}}</h1>
      
      <Page :page="content" class="text-white"/>
    </div>
  </div>
</template>

<script>
import Paragraph from '../components/Notion/Paragraph'
import Page from '../components/Notion/Page'

export default {
  components: { Paragraph, Page },
  
  async asyncData({ $axios }) {
    const info = await $axios.$get('https://api.notion.com/v1/blocks/281f0c6a49ae4402953cac87bcea8337', {
    })
    const title = info.child_page.title
    const content = await $axios.$get('https://api.notion.com/v1/blocks/281f0c6a49ae4402953cac87bcea8337/children', {
    })
    return { content, title }
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

<style lang="css">
h3 {
  @apply font-brand  text-3xl mt-8 mb-4 tracking-wide font-semibold;
}

img {
  @apply w-3/4
}

</style>