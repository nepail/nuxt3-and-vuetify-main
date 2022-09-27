<template>
    <div class="wrapper-container-bottom-bottomSection">
        <div class="wrapper-container-list">
            <NuxtLink :to="`${route.path}/${index}`" v-for="(item, index) in listData">
                <div class="wrapper-container-list-card">
                    <div class="wrapper-container-list-card-top">
                        <img src="https://picsum.photos/400/400?random=1" alt="" draggable="false">
                    </div>
                    <div class="wrapper-container-list-card-bottom">
                        <h3>{{item.title}}</h3>
                        <h4>{{item.time}}</h4>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

const route = useRoute()

const listData = [
    { title: '2020助力世界盃', time: '結束時間:2022-12-18 23:59:59' },
    { title: '2020助力世界盃', time: '結束時間:2022-12-18 23:59:59' },
    { title: '2020助力世界盃', time: '結束時間:2022-12-18 23:59:59' },
    { title: '2020助力世界盃', time: '結束時間:2022-12-18 23:59:59' },
    { title: '2020助力世界盃', time: '結束時間:2022-12-18 23:59:59' },
]

// const listIndex = ref(0)

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
        }
    }

    &-list {
        background-color: #fff;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 2rem;

        @media(min-width: 435px) {
            width: 435px;
        }

        @media(min-width: 1000px) {
            width: 900px;
        }

        @media(min-width: 1330px) {
            width: 1330px;
        }

        @media(min-width: 1920px) {
            width: 1330px;
        }

        &-card {
            flex: 0 0 400px;
            height: 320px;
            background-color: #F8F7FD;
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
                padding: .8rem 1.2rem;

                h3 {
                    padding-top: .4rem;
                    font-size: .9rem;
                }

                h4 {
                    padding-top: .4rem;
                    font-size: .7rem;
                    color: gray;
                }
            }

        }
    }
}
</style>