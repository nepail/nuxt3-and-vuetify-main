<template>
    <div>
        <NuxtLink to="https://www.google.com" target="_blank" rel="noreferrer noopenner">
            <div class="wrapper-container-list-card">
                <div class="wrapper-container-list-card-top">
                    <img :src="`https://picsum.photos/400/400?random=${data.index}`" alt="" draggable="false">
                </div>
                <div class="wrapper-container-list-card-bottom">
                    <h3>{{data.name}}</h3>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">

interface platformData extends receiveData {
    color: string
    index: string
    name: string
}

const route = useRoute()
const props = defineProps<{
    data: platformData,
    index: Number
}>()

const { data, index } = toRefs(props)
</script>

<style lang="scss" scoped>
.wrapper-container-list-card {
    flex: 0 0 400px;
    width: 180px;
    height: 180px;
    background-color: v-bind('data.color');
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 3px 6px #00000029;
    cursor: pointer;

    &:hover h3 {
        color: #ee3224;
    }

    &-top {
        height: 75%;
        overflow: hidden;

        img {
            object-fit: cover;
            transition: .2s;

            &:hover {
                transform: scale(1.2);
            }
        }
    }

    &-bottom {
        display: flex;
        justify-content: center;
        color: #fff;
        h3 {
            padding-top: .8rem;
            font-size: .9rem;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        h4 {
            padding-top: .4rem;
            font-size: .7rem;
            color: gray;
        }
    }

}
</style>