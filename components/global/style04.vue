<template>
    <div>
        <NuxtLink :to="`${route.path}/${index}`">
            <div class="wrapper-container-list-card">
                <div class="wrapper-container-list-card-top">
                    <img src="https://picsum.photos/400/400?random=1" alt="" draggable="false">
                    <div class="wrapper-container-list-card-top-calendar">
                            <p>Sep</p>
                            <p>14</p>
                            <p>2022</p>
                    </div>
                </div>
                <div class="wrapper-container-list-card-bottom">
                    <div class="wrapper-container-list-card-bottom-img">
                        <img src="https://picsum.photos/60/60?random=1" alt="" draggable="false">
                    </div>
                    <div class="wrapper-container-list-card-bottom-content">
                        <h3>{{data.title}}</h3>
                        <h4>{{data.time}}</h4>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">

const route = useRoute()
const props = defineProps<{
    data: receiveData
    index: Number
}>()

const { data, index } = toRefs(props)
</script>

<style lang="scss" scoped>
.wrapper-container-list-card {
    flex: 0 0 400px;
    width: 400px;
    height: 300px;
    background-color: #F8F7FD;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 3px 6px #00000029;
    cursor: pointer;

    &:hover h3 {
        color: #ee3224;
    }

    &-top {
        height: 66%;
        overflow: hidden;
        position: relative;
        &-calendar{
                position: absolute;
                top: 15px;
                right: 25px;
                background-color: #fff;
                padding: .1rem .8rem;
                opacity: 0.8;
                border-radius: 12px;
                font-weight: 600;
                font-size: 13px;
                text-align: center;
                :nth-child(2){
                    font-size: 20px;
                }
        }

        img {
            margin: .5rem;
            object-fit: cover;
            transition: .2s;
            border-radius: 35px;
            width: 96%;
            height: 180px;

            &:hover {
                transform: scale(1.2);
            }
        }
    }

    &-bottom {
        padding: .6rem 1.6rem;
        display: flex;
        &-img{
            margin: 0 .5rem 0 0;
            img{
                border-radius: 10px;
            }
        }
        &-content{
            padding:.1rem .5rem;
        }
        h3 {
            font-size: 18px;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        h4 {
            padding-top: .4rem;
            font-size: 14px;
            color: gray;
        }
    }

}
</style>