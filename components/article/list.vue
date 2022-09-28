<template>
    <div class="wrapper-container-bottom-bottomSection">
        <div class="wrapper-container-list">
            <NuxtLink :to="`${route.path}/${index}`" v-for="(item, index) in data">
                <component :is="sfc" :data="item"></component>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

const route = useRoute()
const props = defineProps<{
    data: Object
    sfcName: string
}>()

const { data } = toRefs(props)
const sfc = resolveComponent(props.sfcName)

</script>

<style lang="scss">
.wrapper-container {
    padding: 0 2rem;
    height: 100%;
    background-color: #fff;

    &-bottom {
        display: flex;
        justify-content: center;

        &-bottomSection {
            display: flex;
            justify-content: center;
            flex-direction: columns;
            padding-bottom: 5rem;
        }
    }

    &-list {
        background-color: #fff;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 2rem;

        @media(min-width: 435px) {
            width: 400px;
        }

        @media(min-width: 1000px) {
            width: 835px;
        }

        @media(min-width: 1330px) {
            width: 1265px;
        }
    }
}
</style>