<template>
  <div>
    <h1 class="notion-h1" :id="block.id" v-if="isValidHeading1(block)">
      {{ block.heading_1.rich_text[0].plain_text }}
    </h1>
    <h2 class="notion-h2" :id="block.id" v-if="isValidHeading2(block)">
      {{ block.heading_2.rich_text[0].plain_text }}
    </h2>
        
     <h3 class="notion-h3" :id="block.id" v-if="isValidHeading3(block)">
      {{ block.heading_3.rich_text[0].plain_text }}
    </h3>
    <NotionParagraph
    v-if="isValidParagraph(block)"
    v-bind:block="block"
    >
  </NotionParagraph>
  <NotionImage v-if="isValidImage(block)"
  :link="block" 
  />
  <NotionBulletedList v-if="isValidBulletedListItem(block)" :block />
  <NotionToggle v-if="isValidToggleItem(block)" :block="block" />
  <NotionVideo v-if="isValidVideo(block)" :block="block" />
  <!-- <Table v-if="isValidTableItem(block)" :block="block" /> -->
</div>
</template>

<script setup >

const props = defineProps(['block'])

const isValidParagraph = (block) => {
  if (block.type !== "paragraph") {
    return false;
  }
  
  if (block.paragraph.rich_text.length == 0) {
    return false;
  }
  
  if (block.paragraph.rich_text[0].plain_text.length == 0) {
    return false;
  }
  return true;
}

const isValidHeading1 = (block) => {
  if (block.type !== "heading_1") {
    return false;
  }
  
  if (block.heading_1.rich_text.length == 0) {
    return false;
  }
  
  if (block.heading_1.rich_text[0].plain_text.length == 0) {
    return false;
  }
  return true;
}
const isValidHeading2 = (block) => {
  if (block.type !== "heading_2") {
    return false;
  }
  
  if (block.heading_2.rich_text.length == 0) {
    return false;
  }
  
  if (block.heading_2.rich_text[0].plain_text.length == 0) {
    return false;
  }
  return true;
}
const isValidHeading3 = (block) => {
  if (block.type !== "heading_3") {
    return false;
  }
  
  if (block.heading_3.rich_text.length == 0) {
    return false;
  }
  
  if (block.heading_3.rich_text[0].plain_text.length == 0) {
    return false;
  }
  return true;
}

const isValidImage = (block) => {
  if (block.type !== "image") {
    return false
  }
  return true;
}
const isValidBulletedListItem = (block) => {
  if (block.type != "bulleted_list_item") {
    return false;
  }
  return true;
}

const isValidToggleItem = (block) => {
  if (block.type !== "toggle") {
    return false;
  }
  
  if (block.toggle.rich_text.length == 0) {
    return false;
  }
  
  if (block.toggle.rich_text[0].plain_text.length == 0) {
    return false;
  }
  return true;
}

const isValidVideo = (block) => {
  if (block.type !== "video") {
    return false;
  }
  return true;
}
</script>
