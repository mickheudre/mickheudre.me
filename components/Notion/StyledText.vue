<template>
    <span v-if="text.link === null">{{ text.content }}</span>
    <a v-else :href="text.link.url" class="font-semibold hover:underline">{{ text.content }}</a>
</template>

<script>
export default {
    props: {
        text: Object
    },
    mounted() {
        console.log(this.text.link)
    }
}
</script>