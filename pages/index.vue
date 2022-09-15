<template>
    <div class="homepage">
        <div class="homepage-main">
            <prop-cycle></prop-cycle>
            <div class="grid-area">
                <div class="left-grid-area">
                    <carousel-article></carousel-article>
                </div>
                <div class="right-grid-area">

                </div>
            </div>
        </div>
    </div>
</template>

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