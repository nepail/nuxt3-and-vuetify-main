<template>
    <div class="homepage">
        <div class="homepage-main">
            <prop-cycle></prop-cycle>
            <div class="grid-area">
                <div class="left-grid-area">
                    <article-title :data="articleData"></article-title>
                    <carouselWrapper :selected="wrapper" @change-wrapper="wrapper = $event"></carouselWrapper>
                </div>
                <div class="right-grid-area">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const articleData = {
    titleTxt: '最新消息',
    subtitleTxt: '讓您輕鬆掌握熱門賽事訊息'
}

const wrapper = ref(0)

const wrapperHandler =(value)=>{
    console.log(value)
    // wrapper.value = value
    // console.log(wrapper)
}
</script>

<style lang="scss">
.homepage {
    display: flex;
    padding: 0 20px;
    width: 100%;
    flex-direction: column;


}

@media (min-width: 992px) {
    .homepage-main {
        margin: auto;
        padding: 0;
        width: 100%;
        max-width: 1200px;
        .grid-area{
            display: flex;
            padding-top: 2rem;
            flex-wrap: wrap;
            column-gap: 60px;
        }
        .left-grid-area{
            width: calc(66% - 30px);
        }
        .right-grid-area{
            width: calc(33% - 30px);
        }
    }
}
</style>