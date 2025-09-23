<template>
    <div class="notion-toggle">
        <div class="flex justify-between cursor-pointer notion-toggle-title" @click="visible=!visible">
            <h5 class="inline-block">
                {{ block.toggle.rich_text[0].plain_text }}
            </h5>
            <Chevron class="inline-block text-leaf transform" :class="[visible ? 'rotate-90' :'']" />
        </div>
        <div  :class="visible ? 'block' : 'hidden'">
            <NotionRichText class="toggle-text" v-for="element in block.children.results" :key="element.id" :rich-text="element.paragraph.rich_text" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['block'])

const visible = ref(false)
</script>
