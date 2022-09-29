<template>
    <div>
        <NuxtLink :to="`${route.path}/${index}`">
            <div class="wrapper-container-list-card">
                <div class="wrapper-container-list-card-top">
                    <img src="https://picsum.photos/400/400?random=3" alt="" draggable="false">
                </div>
                <div class="wrapper-container-list-card-container">
                    <div class="wrapper-container-list-card-bottom">
                        <div class="wrapper-container-list-card-bottom-content">
                            <div class="wrapper-container-list-card-bottom-content-top">
                                <p class="chip">電競新聞</p>
                                <div class="calendar-date">
                                    <v-icon color="red">mdi-calendar</v-icon>
                                    <p class="calendar-date-time">September 05, 2022</p>
                                </div>

                            </div>
                            <h3>{{data.title}}</h3>
                            <h4>{{data.subTitle}}</h4>
                            <p class="wrapper-container-list-card-bottom-content-top-content">{{data.content}}</p>
                        </div>
                    </div>
                    <div class="wrapper-container-list-card-container-navBar">
                        <div class="wrapper-container-list-card-container-navBar-share nav-btn">
                            <v-icon>mdi-share</v-icon>
                            <p>分享</p>
                        </div>
                        <div class="wrapper-container-list-card-container-navBar-common nav-btn">
                            <v-icon>mdi-comment-processing-outline</v-icon>
                            <p>1</p>
                        </div>
                        <div class="wrapper-container-list-card-container-navBar-heart nav-btn">
                            <v-icon color="red">mdi-heart-outline</v-icon>
                            <p>1</p>
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">

const route = useRoute()

interface hotNewsData extends receiveData{
    subTitle: string,
    content: string
}

const props = defineProps<{
    data: hotNewsData
    index: Number
}>()

const { data, index } = toRefs(props)
</script>

<style lang="scss" scoped>
.wrapper-container-list-card {
    flex: 0 0 400px;
    width: 400px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 3px 6px #00000029;
    cursor: pointer;

    &:hover h3 {
        color: #ee3224;
    }

    &:hover img {
        transform: scale(1.2);
    }

    &:hover {
        box-shadow: 0 5px 10px #000000b6;
    }

    &-container {
        margin: 0 1rem;

        &-navBar {
            display: flex;

            .nav-btn {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 1rem;
                padding-bottom: 1rem;
                font-size: 12px;
                color: gray;

                p {
                    margin-left: .3rem;
                }

                &:hover {
                    color: black;
                }
            }
        }
    }

    &-top {
        overflow: hidden;

        img {
            object-fit: cover;
            transition: .2s;
            height: 200px;
            width: 100%;
        }
    }

    &-bottom {
        border-bottom: 1px solid rgb(194, 189, 189);

        &-content {
            &-top {
                display: flex;
                justify-content: space-between;
                margin: .5rem .4rem .3rem 0;

                &-content {
                    color: gray;
                    font-size: 11px;
                    line-height: 1.5;
                    margin: .4rem 0 1.2rem 0;
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .chip {
                    font-size: 12px;
                    background-image: linear-gradient(to right, orange, red);
                    color: #fff;
                    padding: .3rem .5rem;
                    border-radius: 1rem;
                }

                .calendar-date {
                    display: flex;
                    font-size: 10px;
                    font-weight: 600;
                    align-items: flex-end;

                    &-time {
                        color: red;
                    }
                }
            }

            h3 {
                padding-top: .4rem;
                font-size: .9rem;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            h4 {
                padding-top: .1rem;
                font-size: .7rem;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }

}
</style>