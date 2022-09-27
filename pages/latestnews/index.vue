<template>
    <div>
        <NuxtLayout :name="layout" :btitle="bTitle">
            <template #top>
                <div class="wrapper-slid">
                    <prop-cycle></prop-cycle>
                </div>
            </template>
            <template #content>
                <navLabel></navLabel>
                <articleList></articleList>
            </template>
        </NuxtLayout>
    </div>

</template>

<script setup lang="ts">
    const layout: string = 'list'
    const bTitle: string = '最新消息111ccc'
</script>

<style lang="scss" scoped>
$medium: 768px;
$big: 992px;
$large: 1200px;

.wrapper-slid {
    position: fixed;
    top: 0;
    height: 400px;
    width: 100%;

    .v-img__img--contain {
        object-fit: cover;
    }

    .v-carousel {
        height: 530px !important;
    }
}

:deep .banner {
    width: 100%;
    text-align: center;
    background-color: #fff;
    height: 500px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    &-title {
        background-color: #ee3224;
    }

    @media(min-width: $big) {
        padding-top: 1rem;
        padding-bottom: 1rem;
        height: 480px;
    }

    @media(min-width: $medium) {
        height: 520px;
    }

    @media(min-width: $large) {
        height: 540px;
    }

    @media(min-width: 1600px) {
        height: 480px;

    }

    &-title {

        h1 {
            font-size: 2.25rem;
            color: #fff;
        }
    }
}
</style>