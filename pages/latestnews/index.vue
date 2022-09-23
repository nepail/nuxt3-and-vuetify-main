<template>
    <div class="wrapper-slid">
        <prop-cycle></prop-cycle>
    </div>
    <div class="wrapper">
        <banner-title :title="'最新消息'">
            <div class="wrapper-container">
                <ul class="wrapper-container-nav">
                    <li class="wrapper-container-nav-label">
                        <!-- <v-icon></v-icon> -->
                        <p>全部優惠</p>
                    </li>
                    <li class="wrapper-container-nav-label">
                        <p>新會員專屬</p>
                    </li>
                    <li class="wrapper-container-nav-label">
                        <p>熱門主題</p>
                    </li>
                </ul>
                <div class="wrapper-container-list">
                    <div class="wrapper-container-list-card">
                        <div class="wrapper-container-list-card-top">
                            <img src="https://picsum.photos/400/400?random=1" alt="">
                        </div>
                        <div class="wrapper-container-list-card-bottom">
                            <h3>2020助力世界盃</h3>
                            <h4>結束時間:2022-12-18 23:59:59</h4>
                        </div>
                    </div>
                    <div class="wrapper-container-list-card">
                        <div class="wrapper-container-list-card-top">
                            <img src="https://picsum.photos/400/400?random=1" alt="">
                        </div>
                        <div class="wrapper-container-list-card-bottom">
                            <h3>2020助力世界盃</h3>
                            <h4>結束時間:2022-12-18 23:59:59</h4>
                        </div>
                    </div>
                    <div class="wrapper-container-list-card">
                        <div class="wrapper-container-list-card-top">
                            <img src="https://picsum.photos/400/400?random=1" alt="">
                        </div>
                        <div class="wrapper-container-list-card-bottom">
                            <h3>2020助力世界盃</h3>
                            <h4>結束時間:2022-12-18 23:59:59</h4>
                        </div>
                    </div>
                    <div class="wrapper-container-list-card">
                        <div class="wrapper-container-list-card-top">
                            <img src="https://picsum.photos/400/400?random=1" alt="">
                        </div>
                        <div class="wrapper-container-list-card-bottom">
                            <h3>2022202220222022</h3>
                            <h4>202220222022</h4>
                        </div>
                    </div>
                </div>
            </div>
        </banner-title>
    </div>
</template>

<style lang="scss">
$big: 992px;
.wrapper-slid{
    position: fixed;
    top: 0;
    height: 400px;
    width: 100%;
    .v-img__img--contain{
        object-fit: cover;
    }
    .v-carousel{
        height: 530px !important;
    }
}
.wrapper {

    .loading{
        position: relative;
        z-index: 1;
    }
    .banner {
        width: 100%;
        text-align: center;
        background-color: #fff;
        height: 470px;
        display: flex;
        justify-content: end;
        flex-direction: column;
        &-title{
            background-color: #ee3224;
        }

        @media(min-width: $big) {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        &-title {

            h1 {
                font-size: 2.25rem;
                color: #fff;
            }
        }
    }

    &-container {
        // margin: 0 22rem;
        padding: 0 2rem;
        height: 100%;
        background-color: #fff;

        &-nav {
            display: flex;
            justify-content: center;
            padding: 2rem 0;
            background-color: #fff;
            flex-wrap: wrap;

            &-label {
                list-style-type: none;
                box-shadow: 0 3px 6px #00000029;
                padding: 10px 2rem;
                // margin: 0 .875rem;
                border-radius: 50px;
                gap: 10px;
            }
        }

        &-list {
            background-color: #fff;
            // height: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;

            &-card {
                // width: 200px;
                flex: 0 0 360px;
                height: 320px;
                background-color: #F8F7FD;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 3px 6px #00000029;
                cursor: pointer;
                &:hover h3{
                    color:#ee3224;
                }
                &-top{
                    height: 75%;
                    overflow: hidden;
                    img{
                        object-fit: cover;
                        transition: .2s;
                        &:hover{
                            transform: scale(1.2);
                        }
                    }
                }
                &-bottom{
                    padding: .8rem 1.2rem;
                    h3{
                        padding-top: .4rem;
                        font-size: .9rem;
                    }
                    h4{
                        padding-top: .4rem;
                        font-size: .7rem;
                        color: gray;
                    }
                }

            }
        }
    }
}
</style>