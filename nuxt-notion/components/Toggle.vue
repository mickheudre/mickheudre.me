<template>
    <div class="notion-toggle">
        <div class="flex cursor-pointer notion-toggle-title" @click="visible = !visible">
            <NotionChevron  :class="[visible ? 'rotate' : '']" />
            <p class="">
                {{ block.toggle.rich_text[0].plain_text }}
            </p>
        </div>
        <div  :class="visible ? 'block' : 'hidden'">
            <NotionBlock class="notion-toggle-content" v-for="element in resume.results" :key="element.id" :block="element" />
            <!-- <NotionRichText class="toggle-text" v-for="element in block.children.results" :key="element.id" :rich-text="element.paragraph.rich_text" /> -->
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['block'])
const {data: resume} = await useFetch(
`https://api.notion.com/v1/blocks/${props.block.id}/children`, {
headers : {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
    'Notion-Version': '2022-06-28',
}
})


const visible = ref(false)
</script>

<style lang="css">
.rotate {
    transform: rotate(90deg);
}

</style>