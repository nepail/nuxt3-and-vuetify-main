<template>
    <NuxtLayout :name="layout" :bannerTitle="'新聞動態'">
        <template #leftContent>
            <mainHotnews :title="mainContentData.title"></mainHotnews>
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
    title: `英雄聯盟全球總決賽 LPL 賽區隊伍出爐！ [${route.params.aid}]`
}


</script>

<style lang="scss">

</style>