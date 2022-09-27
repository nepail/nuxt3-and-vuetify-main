<template>
    <div>
        <banner-title :title="bannerTitle">
            <div class="article-container">
                <div class="article-container-left">
                    <slot name="leftContent"></slot>
                </div>
                <slot></slot>
                <div class="article-container-right">
                    <slot name="asideContent"></slot>
                </div>
            </div>
        </banner-title>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    bannerTitle: String
})

const { bannerTitle } = toRefs(props)

</script>

<style lang="scss">
.article-container {

    img {
        object-fit: cover;
        width: 100%;
    }

    background-color: #fff;
    margin: 0 auto;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    padding-top: 3rem;
    padding-bottom: 6rem;
    display: flex;
    column-gap: 1rem;
    flex-direction: column;

    @media (min-width: 620px) {
        flex-direction: row;
    }

    @media (min-width: 992px) {
        width: 992px;
    }

    @media (min-width: 1280px) {
        width: 1200px;
    }

    @media (min-width: 1920px) {
        padding-right: unset;
        padding-left: unset;
    }

    &-left {
        width: 100%;
        padding: 1rem;
    }

    &-right {
        padding-top: 1.5rem;
        width: 100%;

        @media(min-width: 640px) {
            width: 330px;
        }

    }
}
</style>