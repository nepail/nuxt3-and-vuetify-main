<template>
    <div class="aside">
        <div class="side-block">
            <div class="side-block-title">
                <p>相關新聞</p>
            </div>
            <div class="side-block-list">
                <div class="side-block-list-item">
                    <div class="side-block-list-item-cover">
                        <img src="https://picsum.photos/400/400?random=1" alt="">
                    </div>
                    <div class="side-block-list-item-content">
                        <h3>籃球的基本術語</h3>
                        <h5>28個基本籃球術語28個基本籃球術語</h5>
                    </div>
                </div>
                <div class="side-block-list-item">
                    <div class="side-block-list-item-cover">
                        <img src="https://picsum.photos/400/400?random=1" alt="">
                    </div>
                    <div class="side-block-list-item-content">
                        <h3>籃球的基本術語</h3>
                        <h5>28個基本籃球術語28個基本籃球術語</h5>
                    </div>
                </div>
                <div class="side-block-list-item">
                    <div class="side-block-list-item-cover">
                        <img src="https://picsum.photos/400/400?random=1" alt="">
                    </div>
                    <div class="side-block-list-item-content">
                        <h3>籃球的基本術語</h3>
                        <h5>28個基本籃球術語28個基本籃球術語</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="side-block">
            <div class="side-block-title">
                <p>熱門新聞</p>
            </div>
            <div class="side-block-list">
                <div class="side-block-list-item hot-news">
                    <div class="side-block-list-item-cover filled-circle">
                        <p>1</p>
                    </div>
                    <div class="side-block-list-item-content">
                        <h3>2022年9月期刊</h3>
                    </div>
                </div>
                <div class="side-block-list-item hot-news">
                    <div class="side-block-list-item-cover filled-circle">
                        <p>2</p>
                    </div>
                    <div class="side-block-list-item-content">
                        <h3>PG電子活動專區</h3>

                    </div>
                </div>
                <div class="side-block-list-item hot-news">
                    <div class="side-block-list-item-cover filled-circle">
                        <p>3</p>
                    </div>
                    <div class="side-block-list-item-content">
                        <h3>籃球的基本術語</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="side-block">
            <div class="side-block-title">
                <p>熱搜關鍵字</p>
            </div>
            <div class="side-block-list hot-keywords">
                <div class="side-block-list-item hot-keywords-item">
                    <p>糖果派對</p>
                </div>
                <div class="side-block-list-item hot-keywords-item">
                    <p>牛牛</p>
                </div>
                <div class="side-block-list-item hot-keywords-item">
                    <p>捕魚</p>
                </div>
                <div class="side-block-list-item hot-keywords-item">
                    <p>NFT</p>
                </div>
                <div class="side-block-list-item hot-keywords-item">
                    <p>體育動態</p>
                </div>
                <div class="side-block-list-item hot-keywords-item">
                    <p>區塊鏈</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">

.aside{
    position: sticky;
    top: 80px;
}

.filled-circle {
    background-color: #dfdfe853;
    border-radius: 50% !important;
    color: orange;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px !important;
    width: 50px !important;
    margin-right: 1rem !important;
}

.hot-news {
    border-bottom: none !important;

    &:hover {
        background-color: #fff !important;
    }

    &:hover h3 {
        color: orange;
    }
}

.hot-keywords {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 10px;
    height: 100%;
    margin-top: 20px;
    gap: 8px;

    &-item {
        padding: .3rem .6rem !important;
        border: 1px solid #d9d9d9;
        border-radius: 20px;
    }
}

.side-block {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;

    &-title {
        display: flex;
        justify-content: flex-start;
        padding-bottom: .5rem;
        margin-bottom: .6rem;
        border-bottom: 4px solid #ee3224;
        color: #ee3224;
        font-weight: bolder;
    }

    &-list {
        &-item {
            display: flex;
            padding: 1rem 0;
            border-bottom: 1px solid #dfdfe8e4;
            cursor: pointer;

            &:hover {
                background-color: #dfdfe853;
            }

            &-cover {
                width: 80px;
                height: 40px;
                overflow: hidden;
                border-radius: 10%;
                margin-right: .6rem;

                img {
                    object-fit: cover;
                }
            }

            &-content {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;

                h3 {
                    font-size: 12px;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }

                h5 {
                    font-size: .1rem;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    color: #7a7a87c9;
                }
            }
        }
    }
}
</style>