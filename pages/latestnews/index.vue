<template>
    <div>
        <div class="wrapper-slid">
            <prop-cycle></prop-cycle>
        </div>
        <div class="wrapper">
            <banner-title :title="'最新消息'">
                <div class="wrapper-container">

                    <div class="wrapper-container-bottom">
                        <div class="wrapper-container-bottom-container">
                            <ul class="wrapper-container-nav">
                                <li class="wrapper-container-nav-label">
                                    <!-- <v-icon></v-icon> -->
                                    <p>全部優惠</p>
                                </li>
                                <li class="wrapper-container-nav-label">
                                    <p>新會員專屬</p>
                                </li>
                                <li class="wrapper-container-nav-label">
                                    <p>熱門主打</p>
                                </li>
                                <li class="wrapper-container-nav-label">
                                    <p>視訊/電子</p>
                                </li>
                                <li class="wrapper-container-nav-label">
                                    <p>體育</p>
                                </li>
                                <li class="wrapper-container-nav-label">
                                    <p>VIP 專屬</p>
                                </li>
                            </ul>
                            <div class="wrapper-container-bottom-bottomSection">
                                <div class="wrapper-container-list">
                                    <NuxtLink to="/latestnews/1">
                                        <div class="wrapper-container-list-card">
                                            <div class="wrapper-container-list-card-top">
                                                <img src="https://picsum.photos/400/400?random=1" alt=""
                                                    draggable="false">
                                            </div>
                                            <div class="wrapper-container-list-card-bottom">
                                                <h3>2020助力世界盃</h3>
                                                <h4>結束時間:2022-12-18 23:59:59</h4>
                                            </div>
                                        </div>
                                    </NuxtLink>
                                    <div class="wrapper-container-list-card">
                                        <div class="wrapper-container-list-card-top">
                                            <img src="https://picsum.photos/400/400?random=1" alt="" draggable="false">
                                        </div>
                                        <div class="wrapper-container-list-card-bottom">
                                            <h3>2020助力世界盃</h3>
                                            <h4>結束時間:2022-12-18 23:59:59</h4>
                                        </div>
                                    </div>
                                    <div class="wrapper-container-list-card">
                                        <div class="wrapper-container-list-card-top">
                                            <img src="https://picsum.photos/400/400?random=1" alt="" draggable="false">
                                        </div>
                                        <div class="wrapper-container-list-card-bottom">
                                            <h3>2020助力世界盃</h3>
                                            <h4>結束時間:2022-12-18 23:59:59</h4>
                                        </div>
                                    </div>
                                    <div class="wrapper-container-list-card">
                                        <div class="wrapper-container-list-card-top">
                                            <img src="https://picsum.photos/400/400?random=1" alt="" draggable="false">
                                        </div>
                                        <div class="wrapper-container-list-card-bottom">
                                            <h3>2022202220222022</h3>
                                            <h4>202220222022</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </banner-title>
        </div>
    </div>

</template>

<style lang="scss">
$medium: 768px;
$big: 992px;
$large: 1200px;

.wrapper-slid {
    position: fixed;
    top: 0;
    height: 400px;
    width: 100%;

    .v-img__img--contain {
        object-fit: cover;
    }

    .v-carousel {
        height: 530px !important;
    }
}

.wrapper {

    .loading {
        position: relative;
        z-index: 1;
    }

    .banner {
        width: 100%;
        text-align: center;
        background-color: #fff;
        height: 500px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;

        &-title {
            background-color: #ee3224;
        }

        @media(min-width: $big) {
            padding-top: 1rem;
            padding-bottom: 1rem;
            height: 480px;
        }

        @media(min-width: $medium) {
            height: 520px;
        }

        @media(min-width: $large) {
            height: 540px;
        }

        @media(min-width: 1600px) {
            height: 480px;

        }

        &-title {

            h1 {
                font-size: 2.25rem;
                color: #fff;
            }
        }
    }

    &-container {
        padding: 0 2rem;
        height: 100%;
        background-color: #fff;

        &-bottom {
            display: flex;
            justify-content: center;
            &-bottomSection{
                display: flex;
                justify-content: center;
                flex-direction: columns;
            }
        }

        &-nav {
            display: flex;
            justify-content: flex-start;
            padding: 2rem 0;
            background-color: #fff;
            flex-wrap: wrap;
            gap: 1rem;

            &-label {
                list-style-type: none;
                box-shadow: 0 3px 6px #00000029;
                padding: 10px 2rem;
                border-radius: 50px;
                gap: 10px;
                cursor: pointer;
                transition: background-img .2s ease-in-out;
                background-image: none;
                &:hover{
                    background-image: linear-gradient(to right,rgb(255, 193, 123), rgba(255, 193, 123, 0.515));
                }
            }
        }

        &-list {
            background-color: #fff;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 2rem;

            @media(min-width: 435px) {
                width: 435px;
            }

            @media(min-width: 1000px) {
                width: 900px;
            }

            @media(min-width: 1330px) {
                width: 1330px;
            }

            @media(min-width: 1920px) {
                width: 1330px;
            }

            &-card {
                flex: 0 0 400px;
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

                    h3 {
                        padding-top: .4rem;
                        font-size: .9rem;
                    }

                    h4 {
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