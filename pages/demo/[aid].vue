<template>
    <NuxtLayout :name="layout" :bannerTitle="'BB電子'">
        <template #leftContent>
            <mainDemo :title="mainContentData.title"></mainDemo>
        </template>
        
        <template #asideContent>
            <asideSection></asideSection>
        </template>
    </NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute()
const layout:string = 'article'

interface mainContent {
    title: string;
}

const mainContentData: mainContent =
{
    title: `宙斯 [${route.params.aid}]`
}


</script>

<style lang="scss">

</style>