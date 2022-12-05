<template>
    <img class="m-8" :src="link.image.file.url" />
</template>

<script>
export default {
    props: {
        link: Object
    }
}
</script>