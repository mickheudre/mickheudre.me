<template>
      <li class="notion-bulleted-list">
      <NotionStyledText v-for="(element, index) in block.bulleted_list_item.rich_text" :key="index" :text="element"></NotionStyledText>
  </li>
  </template>

<script setup>
const props = defineProps(['block'])
</script>