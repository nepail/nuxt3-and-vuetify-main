<template>
    <NuxtLayout :name="'list'" :btitle="'平台服務'">
        <template #content>
            <navSearch></navSearch>
            <articleList :data="listData" :sfcName="copname"></articleList>
        </template>
    </NuxtLayout>
</template>

<script setup lang="ts">
    let randomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16)

    const listData = []
    for(let i = 0; i < 50; i++){
        listData.push({ name: 'OO電子', color: randomColor(), index: i})
    }
    
    const copname = 'globalStyle03'

    

    console.log(randomColor())
</script>

<style lang="scss" scoped>

</style>