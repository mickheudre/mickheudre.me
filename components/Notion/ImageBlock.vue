<template>
    <img class="my-8 mx-auto" :src="link.image.file.url" />
</template>

<script>
export default {
    props: {
        link: Object
    }
}
</script>