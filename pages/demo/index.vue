<template>
    <div>
        <NuxtLayout :name="layout" :btitle="bTitle">
            <template #top>
                <div class="wrapper-slid">
                    <prop-cycle></prop-cycle>
                </div>
            </template>
            <template #content>
                <navSearch></navSearch>
                <articleList :data="listData" :sfcName="copname">
                    <template #default>
                        <navGamelist></navGamelist>
                    </template>
                </articleList>
            </template>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
const layout: string = 'list'
const bTitle: string = '電子試玩'
const listData = [
    { title: '宙斯', time: '盤面擴展 旋轉再爆獎' },
    { title: '宙斯', time: '盤面擴展 旋轉再爆獎' },
    { title: '宙斯', time: '盤面擴展 旋轉再爆獎' },
    { title: '宙斯', time: '盤面擴展 旋轉再爆獎' },
    { title: '宙斯', time: '盤面擴展 旋轉再爆獎' },
]
const copname = 'globalStyle04'
const copdata = [

]
</script>

<style lang="scss">

</style>