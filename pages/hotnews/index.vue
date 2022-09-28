<template>
    <NuxtLayout :name="'list'" :btitle="'新聞動態'">
        <template #content>
            <navSearch></navSearch>
            <articleList :data="listData" :sfcName="copname"></articleList>
        </template>
    </NuxtLayout>
</template>

<script setup lang="ts">
    const listData = [
        { title: '2022年必玩的10款AR遊戲！',subTitle: '強調互動和沉浸式體驗的 AR 遊戲是什麼？', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nihil dignissimos unde reiciendis quae sint veritatis, magni eum voluptatibus odit possimus ducimus! Pariatur illum nihil voluptatibus velit culpa saepe perspiciatis?' },
        { title: '2022年必玩的10款AR遊戲！',subTitle: '強調互動和沉浸式體驗的 AR 遊戲是什麼？', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nihil dignissimos unde reiciendis quae sint veritatis, magni eum voluptatibus odit possimus ducimus! Pariatur illum nihil voluptatibus velit culpa saepe perspiciatis?' },
        { title: '2022年必玩的10款AR遊戲！',subTitle: '強調互動和沉浸式體驗的 AR 遊戲是什麼？', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nihil dignissimos unde reiciendis quae sint veritatis, magni eum voluptatibus odit possimus ducimus! Pariatur illum nihil voluptatibus velit culpa saepe perspiciatis?' },
        { title: '2022年必玩的10款AR遊戲！',subTitle: '強調互動和沉浸式體驗的 AR 遊戲是什麼？', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nihil dignissimos unde reiciendis quae sint veritatis, magni eum voluptatibus odit possimus ducimus! Pariatur illum nihil voluptatibus velit culpa saepe perspiciatis?' },
        { title: '2022年必玩的10款AR遊戲！',subTitle: '強調互動和沉浸式體驗的 AR 遊戲是什麼？', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nihil dignissimos unde reiciendis quae sint veritatis, magni eum voluptatibus odit possimus ducimus! Pariatur illum nihil voluptatibus velit culpa saepe perspiciatis?' },
    ]

    
    const copname = 'globalStyle02'
</script>

<style lang="scss" scoped>

</style>