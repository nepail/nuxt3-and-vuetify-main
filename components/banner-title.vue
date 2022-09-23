<template>
    <div class="banner">
        <div class="banner-title">
            <h1>{{title}}</h1>
        </div>
    </div>
    <slot></slot>
    <div class="loading"></div>
</template>

<script setup>

const props = defineProps({
    title: String
})

const { title } = toRefs(props)

</script>

<style lang="scss">
    $big: 992px;
    .banner{
        width: 100%;
        text-align: center;
        background: #ee3224;
        @media(min-width: $big){
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        &-title{
            
            h1{
                font-size: 2.25rem;
                color: #fff;
            }
        }
    }
    .loading{
        height: calc(100vh - 400px);
    }
</style>