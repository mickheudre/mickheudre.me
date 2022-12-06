<template>
    <img class="notion-img" :src="link.image.file.url" />
</template>

<script>
export default {
    props: {
        link: Object
    }
}
</script>