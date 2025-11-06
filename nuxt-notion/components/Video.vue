<template>
    <div class="notion-video">
    <iframe style="width: 100%; aspect-ratio: 16/9" 
        :src="url">
    </iframe>
    </div>
</template>

<script setup lang="ts">

const props = defineProps(['block'])
var url : string = "";
if (props.block.video.external.url.includes("youtu.be")) {
    url = props.block.video.external.url.replace('https://youtu.be/', 'https://www.youtube.com/embed/')
} else {
    url = props.block.video.external.url.replace('watch?v=','embed/')
}

if (url.includes('&t=')) {
    const numbers = url.match(/&t=.*?(\d+(?:,\d+)*(?:\.\d+)?)s/)
    url = url.replace(numbers[0],`?start=${numbers[1]}`);
}
</script>