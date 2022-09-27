<template>
    <NuxtLayout :name="layout" :bannerTitle="'最新消息'">
        <template #leftContent>
            <mainContent :title="mainContentData.title"></mainContent>
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
    title: `中秋抽到爽 YYDSYYDS [${route.params.aid}]`
}


</script>

<style lang="scss">

</style>