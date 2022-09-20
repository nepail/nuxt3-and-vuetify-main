<template>
    <div class="popular-articles">
        <div class="popular-articles-list-wrapper">
            <div class="list-header">
                <h1>熱門文章</h1>
                <a href="">
                    <p>查看更多</p>
                    <v-icon>mdi-chevron-right</v-icon>
                </a>
            </div>
            <div class="popular-article-list">
                <div class="popular-article-item">
                    <a href=""></a>
                    <div class="seq">01</div>
                    <div class="content">
                        <div class="calendar-wrapper">
                            <v-icon color="gray">mdi-calendar-text</v-icon>
                            <p>August 31, 2022</p>
                        </div>
                        <h3>2022年</h3>
                    </div>
                </div>
                <div class="popular-article-item">
                    <a href=""></a>
                    <div class="seq">01</div>
                    <div class="content">
                        <div class="calendar-wrapper">
                            <v-icon color="gray">mdi-calendar-text</v-icon>
                            <p>August 31, 2022</p>
                        </div>
                        <h3>2022年</h3>
                    </div>
                </div>
                <div class="popular-article-item">
                    <a href=""></a>
                    <div class="seq">01</div>
                    <div class="content">
                        <div class="calendar-wrapper">
                            <v-icon color="gray">mdi-calendar-text</v-icon>
                            <p>August 31, 2022</p>
                        </div>
                        <h3>2022年</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.popular-articles {
    padding: 2rem 0;
    padding-top: 0;
}
.popular-articles-list-wrapper{
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 3px 6px #00000029;
    .list-header{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem;
        height: 45px;
        font-weight: bold;
        text-align: center;
        color: #fff;
        background-color: #C82621;
        a{
            display: none;
            color: #fff;
            align-items: center;
            font-size: 14px;
        }
    }
    .popular-article-list{
        overflow: auto;
        .popular-article-item{
            position: relative;
            display: flex;
            align-items: center;
            padding: 1.25rem 1.25rem 1.25rem;
            border-top: 1px solid #d9d9d9;
            a{
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: auto;
                z-index: 5;
            }
            .seq{
                padding-left: 0.5rem;
                font-size: 1.25rem;
                font-weight: bolder;
                color: #d43021;
            }
            .content{
                padding-left: 1.5rem;
                .calendar-wrapper{
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    font-size: .875rem;
                    line-height: 1rem;
                    color: gray;
                }
                h3{
                    font-size: 14px;
                    line-height: 1.5;
                }
            }
        }
    }
}

@media(min-width: 992px){
    .popular-articles-list-wrapper{
        .list-header{
            justify-content: space-between;
            padding: 1.25rem;
            height: auto;
            font-size: 1.25rem;
            a{
                display: flex;
                font-size: .875rem;
                color: #fff;
            }
        }
        .popular-article-list{
            height: auto;
        }
    }
}
</style>