<template>
    <NuxtLayout :name="'list'" :btitle="'平台服務'">
        <template #content>
            <nav-tabs :activeKey="activeKey" @tabClick="tabClickHendler"></nav-tabs>
            <articleList :data="listData" :sfcName="copname"></articleList>
        </template>
    </NuxtLayout>
</template>

<script setup lang="ts">
    let randomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16)

    let activeKey = ref(0)
    const tabClickHendler = (i: number) => activeKey.value = i

    const listData = []
    for(let i = 0; i < 50; i++){
        listData.push({ name: 'OO電子', color: randomColor(), index: i})
    }
    
    const copname = 'globalStyle03'

</script>

<style lang="scss" scoped>

</style>