<template>
  <div>
    <h1 v-if="isValidHeading1(block)" class="font-brand font-bold text-white text-4xl my-6">
            {{ block.heading_1.text[0].text.content }}
        </h1>
    <h3
      v-if="isValidHeading3(this.block)"
    >
      {{ this.block.heading_3.text[0].text.content }}
    </h3>
    <ImageBlock v-if="isValidImage(this.block)" :link="this.block"/>
    <paragraph
      v-if="isValidParagraph(this.block)"
      class="my-2"
      v-bind:block="this.block"
    >
    </paragraph>
    <li class="ml-4" v-if="isValidBulletedListItem(this.block)">
      {{ this.block.bulleted_list_item.text[0].text.content }}
    </li>
  </div>
</template>

<script>
import Paragraph from "./Paragraph.vue";
import ImageBlock from './ImageBlock.vue'

export default {
  components: { Paragraph, ImageBlock },
  props: {
    block: Object,
  },
  methods: {
    isValidParagraph(block) {
      if (block.type !== "paragraph") {
        return false;
      }
      if (block.paragraph.text.length == 0) {
        return false;
      }
      return true;
    },
    isValidImage(block) {
      if (block.type !== "image") {
        return false;
      }

      return true;
    },
    isValidHeading1(block) {
      if (block.type !== "heading_1") {
        return false;
      }
      if (block.heading_1.text.length == 0) {
        return false;
      }
      return true;
    },
    isValidHeading3(block) {
      if (block.type !== "heading_3") {
        return false;
      }
      if (block.heading_3.text.length == 0) {
        return false;
      }
      return true;
    },
    isValidBulletedListItem(block) {
      if (block.type !== "bulleted_list_item") {
        return false;
      }
      if (block.bulleted_list_item.text.length == 0) {
        return false;
      }
      return true;
    },
  },
};
</script>