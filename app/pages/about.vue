<template>
    <div class="flex flex-col justify-center items-center  min-h-screen">
        <div class="max-w-screen-sm sm:mt-16 pt-16 mb-8">
            <!-- <div class="bg-hero-pattern h-64"></div> -->
            <img src="../assets/images/runner.png" alt="abstract image" class="h-64"/>
            
            <notion-page class="text-white font-light" :page="about" />
        </div>
    </div>
</template>

<script setup>
const {data: about} = await useFetch(
'https://api.notion.com/v1/blocks/9cd620de632e44129ea8305e431da7fa/children', {
headers : {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
    'Notion-Version': '2022-06-28',
}
})

</script>

<style>
.notion-h1 {
  @apply font-brand text-white text-3xl mt-2 mb-6;
}
</style>