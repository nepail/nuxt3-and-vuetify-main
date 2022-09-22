<template>
    <div class="wrapper">
        <div class="banner">
            <div class="banner-title">
                <h1>最新消息</h1>
            </div>
        </div>
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
                <div class="wrapper-container-list-card"></div>
                <div class="wrapper-container-list-card"></div>
                <div class="wrapper-container-list-card"></div>
            </div>
        </div>
        <div class="loading"></div>
    </div>
</template>

<style lang="scss">

$big: 992px;

.wrapper{
    .banner{
        width: 100%;
        text-align: center;
        background: #ee3224;
        // padding-top: 1.5rem;
        // padding-bottom: 1.5rem;
        @media(min-width: $big){
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        &-title{
            
            h1{
                font-size: 2.25rem;
                // font-weight: 400;
                color: #fff;
            }
        }
    }
    &-container{
        padding: 0 14rem;
        &-nav{
            display: flex;
            justify-content: center;
            padding: 2rem 0;
            &-label{
                list-style-type: none;
                // border: 1px solid black;
                box-shadow: 0 3px 6px #00000029;
                padding: 10px 2rem;
                margin: 0 .875rem;
                border-radius: 50px;
            }
        }
    }
    .loading{
        height: 400px;
    }
}
</style>