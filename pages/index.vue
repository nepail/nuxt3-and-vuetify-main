<template>
    <div class="homepage">
        <div class="homepage-main">
            <prop-cycle></prop-cycle>
            <articleCardList></articleCardList>
            <div class="grid-area">
                <div class="left-grid-area">
                    <articleTitle :data="articleData"></articleTitle>
                    <carouselWrapper></carouselWrapper>

                    <articleTitle :data="articleData2"></articleTitle>
                    <carouselWrapper></carouselWrapper>
                </div>
                <div class="right-grid-area">
                    <articlePopular></articlePopular>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const articleData = reactive({
    titleTxt: '最新消息',
    subtitleTxt: '讓您輕鬆掌握熱門賽事訊息'
})

const articleData2 = reactive({
    titleTxt: '最新文章',
    subtitleTxt: '一手資訊即時掌握'
})

</script>

<style lang="scss">
.homepage {
    display: flex;
    padding: 0 20px;
    width: 100%;
    flex-direction: column;
}

.v-img__img--contain {
    object-fit: cover !important;
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

    .container{
        width: 992px;
    }
}

@media (min-width: 1280px){
    .container{
        width: 1200px;
    }
}
</style>