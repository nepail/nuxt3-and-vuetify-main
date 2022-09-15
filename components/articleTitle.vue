<template>
    <div class="hot-articles">
        <div class="title-wrapper">
            <div class="title" >
                <h1 class="title-txt" >最新资讯</h1>
                <h2 class="subtitle-txt" >让您轻松掌握热门市场动态</h2>
            </div>
            <a href="" class="see-more-link">
                <p>看更多</p>
                <v-icon>mdi-chevron-right</v-icon>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.hot-articles {
    .title-wrapper {
        padding-top: 0;
    }
}
.title {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 1.4;
}
.title-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-top: 2.25rem;
    padding-bottom: 10px;
    width: 100%;
    border-bottom: 3px solid #ee3324;
    .title{
        display: flex;
        align-items: flex-end;
        .title-txt{
            font-size: 20px;
            color: #ee3324;
        }
    }
    a.see-more-link{
        display: flex;
        align-items: flex-end;
        font-size: 14px;
        color: #a6a6a6;
    }
}

.title-wrapper .title .subtitle-txt {
    display: none;
    padding-left: .5rem;
    font-weight: 400;
    color: #404040;
    letter-spacing: .5px;
}

@media (min-width: 992px){
    .title-wrapper{
        .title{
            .title-txt{
                font-size: 26px;
            }
            .subtitle-txt{
                display: block;
            }
        }
        a.see-more-link{
            font-size: 16px;
            color: #404040;
        }
    }
}
</style>