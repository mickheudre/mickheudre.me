<template>
  <div class="container">
    <div>
      <h1 class="title">
        Mickaël Heudre
      </h1>
      <div v-for="block in content.results" :key="block.id"> 
        <p v-if="isValidParagraph(block)">{{ block.paragraph.text[0].text.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {}
    }
  },
  async asyncData({ $axios }) {
  const content = await $axios.$get('https://api.notion.com/v1/blocks/b8cb531fc72942b3a7ed8ab383bd1a52/children', {
  })
  console.log(content)
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
  }
}
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
