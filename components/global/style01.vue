<template>
    <div>
        <div class="wrapper-container-list-card">
            <div class="wrapper-container-list-card-top">
                <img src="https://picsum.photos/400/400?random=1" alt="" draggable="false">
            </div>
            <div class="wrapper-container-list-card-bottom">
                <h3>{{data.title}}</h3>
                <h4>{{data.time}}</h4>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    data: Object
})

const { data } = toRefs(props)
</script>

<style lang="scss" scoped>
.wrapper-container-list-card {
    flex: 0 0 400px;
    width: 400px;
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

        // overflow: hidden;
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
            padding-top: .4rem;
            font-size: .7rem;
            color: gray;
        }
    }

}
</style>