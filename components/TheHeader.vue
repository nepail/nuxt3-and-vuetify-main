<template>
    <nav class="new-header">
        <div class="header-info">
            <div class="header-info-bar">
                <a href="/" class="logo--wrapper">
                    <img class="logo" loading="lazy" style="" src="~/assets/esball.png" alt="240x97" name="" fakeimgres="" imgsrc="" mobileimgsrc="" isdesktopdevice="true">
                </a>
                <div class="header-info">
                </div>

                <div class="header-info-pc">
                    <div class="buttons--wrapper">
                        <div class="social-icon-link-list">
                            <a href="" target="_blank" class="social-icon-link-item">
                                <div class="social-link-icon">
                                    <svg width="38px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z"/>
                                    </svg>
                                </div>
                            </a>
                            <a href="" target="_blank"
                                class="social-icon-link-item">
                                <div class="social-link-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024" class="icon">
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="user-related--wrapper">
                        <button class="theme-btn login-out-btn">登入/註冊</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-list-root--wrapper">
            <div class="nav-list--root">
                <ul class="nav-list">
                    <li class="nav-item">
                        <nuxt-link to="/">
                            <p>首頁</p>
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <!-- have-child -->
                        <nuxt-link to="/latestnews">
                                <p>最新消息</p>
                                <v-icon>mdi-chevron-down</v-icon>
                            <!-- </a> -->
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/platform">
                            <p>平台服務</p>
                            <v-icon>mdi-chevron-down</v-icon>
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/hotnews">
                            <p>新聞動態</p>
                            <v-icon>mdi-chevron-down</v-icon>
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/demo">
                            <p>電子試玩</p>
                            <v-icon>mdi-chevron-down</v-icon>
                        </nuxt-link>                        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="new-header-padding"></div>
</template>

<script setup>

    const props = defineProps({
        top: { type: String, default: 'var(--header-height--pc)'}
    })
    
</script>

<style>
.header-user {
    display: flex;
    align-items: center
}

.header-user .user-img {
    position: relative
}

.header-user .user-img .profile-img {
    overflow: hidden;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #f68a1f
}

.header-user .user-img .notification-amount {
    position: absolute;
    top: -5px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .25rem;
    width: 20px;
    font-size: 12px;
    color: #fff;
    background-color: #ee3324;
    border-radius: 1000px
}

.header-user>h3 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 1.4;
    padding-left: 10px;
    max-width: 110px;
    font-size: 14px
}

.header-user>h3:hover {
    color: #ee3324
}

.bottom-nav-list--root {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    position: fixed;
    top: unset;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    border-radius: 30px 30px 0 0;
    z-index: 7002;
    box-shadow: 0 2px 15px #00000029
}

.bottom-nav-list--root .bottom-nav-list {
    display: flex;
    justify-content: space-between;
    padding: 12px 20px 10px;
    width: 100%;
    max-width: 600px
}

.bottom-nav-list--root .bottom-nav-list .bottom-nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    flex-direction: column
}

.bottom-nav-list--root .bottom-nav-list .bottom-nav-item.active .title {
    color: #ee3324
}

.bottom-nav-list--root .bottom-nav-list .bottom-nav-item .icon {
    width: 26px
}

.bottom-nav-list--root .bottom-nav-list .bottom-nav-item .title {
    padding-top: 5px;
    font-size: 12px;
    color: #404040
}

.bottom-nav-list--root .bottom-nav-list .bottom-nav-item .header-user>h3 {
    display: none
}

.bottom-nav-list--root .bottom-nav-list .bottom-nav-item .header-user .notification-amount {
    width: 16px;
    height: 16px
}

@media (min-width: 1200px) {
    .bottom-nav-list--root .bottom-nav-list {
        display: none
    }
}

.header-info-bar {
    --header-height--pc: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 0 20px 0 10px;
    width: 100%;
    height: 42px
}

.header-info-bar .logo--wrapper {
    display: block;
    height: 100%
}

.header-info-bar .logo--wrapper .logo {
    width: auto;
    height: 100%
}

.header-info-bar .header-info {
    display: block;
    font-size: 24px;
    font-weight: bolder;
    color: #ee3324
}

.header-info-bar .header-info .search-icon {
    width: 18px
}

.header-info-bar .header-info .search-icon path {
    fill: #f68a1f
}

.header-info-bar .header-info-pc {
    display: none
}

.header-info-bar .header-info-pc .buttons--wrapper {
    display: flex
}

.header-info-bar .header-info-pc .news-letter-btn {
    cursor: pointer
}

.header-info-bar .header-info-pc .news-letter-btn:hover {
    color: #ee3324
}

@media (min-width: 1200px) {
    .header-info-bar {
        max-width: 1200px;
        height: var(--header-height--pc);
        font-size: 15px
    }

    .header-info-bar .header-info {
        display: none
    }

    .header-info-bar .header-info-pc {
        display: flex;
        align-items: center
    }

    .header-info-bar .header-info-pc .news-letter-btn {
        font-size: 15px
    }

    .header-info-bar .header-info-pc .social-icon-link-list {
        display: flex;
        justify-content: center;
        padding-left: 2rem;
        color: #404040;
        letter-spacing: .75rem
    }

    .header-info-bar .header-info-pc .social-icon-link-list>a {
        color: #404040
    }

    .header-info-bar .header-info-pc .social-icon-link-list :nth-child(n+2) {
        margin-left: 20px
    }

    .header-info-bar .header-info-pc .social-icon-link-list .social-link-icon {
        width: 30px
    }

    .header-info-bar .header-info-pc .user-related--wrapper {
        display: flex
    }

    .header-info-bar .header-info-pc .header-user {
        padding: 0 20px
    }

    .header-info-bar .header-info-pc .login-out-btn {
        margin-left: 2rem;
        padding: .5rem 1.75rem;
        background-color: #c52b20fe;
        color: #FFF;
        border-radius: 20px;
        margin-bottom: 6px;
        
    }
}

.nav-list--root {
    --border: 1px solid #d9d9d9;
    --list-item-height: 40px;
    --list-item-height--pc: 60px;
    --sub-list-item-height: 96px;
    --sub-list-item-height--pc: 140px;
    --list-item-unfolded-height: calc(var(--list-item-height) + var(--sub-list-item-height));
    --list-item-unfolded-height--pc: calc(var(--list-item-height--pc) + var(--sub-list-item-height--pc));
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 1200px;
    font-size: 12px;
    color: #404040;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.nav-list--root .nav-list {
    display: flex;
    padding-left: 0;
    box-shadow: 0 3px 6px #00000029
}

.nav-list--root .nav-list:hover {
    border-radius: 0 0 20px 20px
}

.nav-list--root .nav-list .nav-item {
    overflow: hidden;
    width: 20%;
    height: var(--list-item-height);
    font-size: .75rem;
    transition: .3s;
    cursor: pointer
}

.nav-list--root .nav-list .nav-item>a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: var(--list-item-height);
    color: #404040
}

.nav-list--root .nav-list .nav-item:hover>a {
    color: #f68a1f
}

.nav-list--root .nav-list .nav-item.have-child:hover {
    height: var(--list-item-unfolded-height);
    transition: .3s
}

.nav-list--root .nav-list .nav-item.have-child:hover .icon {
    transition: .3s;
    transform: rotate(90deg)
}

.nav-list--root .nav-list .nav-item.have-child:hover .indicator {
    opacity: 1;
    transition: .2s
}

.nav-list--root .nav-list .nav-item.have-child:hover .sub-nav-list {
    display: flex;
    height: var(--sub-list-item-height);
    transition: .3s
}

.nav-list--root .nav-list .nav-item .icon {
    display: none;
    margin-left: .5rem;
    transition: .3s
}

.nav-list--root .nav-list .nav-item .indicator {
    position: relative;
    top: -.25rem;
    margin: auto;
    width: 60%;
    height: .25rem;
    background: linear-gradient(to right, #f58220 0%, #ee3224 100%);
    border-radius: 10px 10px 0 0;
    opacity: 0;
    z-index: 2;
    transition: .2s
}

.nav-list--root .sub-nav-list {
    position: absolute;
    top: var(--list-item-height);
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding-left: 0;
    width: 100%;
    height: 0;
    background-color: #fff;
    border-radius: 0 0 20px 20px;
    transition: .15s
}

.nav-list--root .sub-nav-list .sub-nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    width: 20%;
    height: 100%
}

.nav-list--root .sub-nav-list .sub-nav-item:hover {
    background-color: #f2f2f2
}

.nav-list--root .sub-nav-list .sub-nav-item>a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #404040;
    flex-direction: column
}

.nav-list--root .sub-nav-list .sub-nav-item .sub-nav-icon {
    width: auto;
    height: 30px
}

.nav-list--root .sub-nav-list .sub-nav-item .title {
    padding: .5rem 0
}

@media (min-width: 1200px) {
    .nav-list--root .nav-list {
        position: relative;
        box-shadow: unset
    }

    .nav-list--root .nav-list .nav-item {
        height: var(--list-item-height--pc);
        font-size: 1rem;
        font-weight: 700
    }

    .nav-list--root .nav-list .nav-item:last-child>a {
        border-right: var(--border)
    }

    .nav-list--root .nav-list .nav-item>a {
        margin-top: calc((var(--list-item-height--pc) - 25px) / 2);
        height: 25px;
        border-left: var(--border)
    }

    .nav-list--root .nav-list .nav-item.have-child:hover {
        height: var(--list-item-unfolded-height--pc)
    }

    .nav-list--root .nav-list .nav-item.have-child:hover .sub-nav-list {
        height: var(--sub-list-item-height--pc)
    }

    .nav-list--root .nav-list .nav-item .icon {
        display: block
    }

    .nav-list--root .nav-list .nav-item .indicator {
        top: -.5rem;
        height: .5rem
    }

    .nav-list--root .sub-nav-list {
        top: var(--list-item-height--pc);
        border-radius: 0
    }

    .nav-list--root .sub-nav-list .sub-nav-item {
        padding: 1.5rem
    }

    .nav-list--root .sub-nav-list .sub-nav-item:nth-child(n+2) {
        margin-left: 1.5rem
    }

    .nav-list--root .sub-nav-list .sub-nav-item .sub-nav-icon {
        width: 50%;
        height: auto
    }
}

@-webkit-keyframes stretch {
    0% {
        overflow: hidden;
        padding: 0;
        height: 0
    }

    to {
        overflow: hidden;
        padding: 1rem 20px;
        padding-top: 30px;
        height: 100vh
    }
}

@keyframes stretch {
    0% {
        overflow: hidden;
        padding: 0;
        height: 0
    }

    to {
        overflow: hidden;
        padding: 1rem 20px;
        padding-top: 30px;
        height: 100vh
    }
}

.stretch-fade-enter-active {
    -webkit-animation: stretch .4s;
    animation: stretch .4s
}

.stretch-fade-leave-active {
    animation: stretch .4s reverse
}

.search-cover--wrapper {
    --header-part-height: 42px;
    position: fixed;
    top: var(--header-part-height);
    left: 0;
    display: flex;
    padding: 30px 1rem 0;
    width: 100%;
    height: calc(100vh - var(--header-part-height));
    background: #fff;
    z-index: 7001;
    box-shadow: 0 3px 6px #00000029;
    flex-direction: column
}

.search-cover--wrapper .search-bar--wrapper {
    display: flex;
    padding: .25rem;
    background-color: #f6f7f9;
    border-radius: 5px
}

.search-cover--wrapper .search-bar--wrapper>input {
    background-color: transparent;
    outline: unset
}

.search-cover--wrapper .search-bar--wrapper>input:focus+button.search.active>svg path,
.search-cover--wrapper .search-bar--wrapper>input:active+button.search.active>svg path {
    fill: #f68a1f;
    transition: .3s
}

.search-cover--wrapper .search-bar--wrapper button.search {
    padding: .25rem;
    width: auto;
    min-width: 40px;
    height: 35px;
    background: transparent;
    box-shadow: unset
}

.search-cover--wrapper .search-bar--wrapper button.search:hover {
    background: unset;
    box-shadow: unset
}

.search-cover--wrapper .search-bar--wrapper button.search.active>svg path {
    transition: .3s 2s
}

.search-cover--wrapper .popular-labels-part {
    padding-top: 2rem
}

.bg-main {
    background-color: #f68a1f
}

.bg-second {
    background-color: #ee3324
}

.bg-third {
    background-color: #fff
}

.bg-gray-1 {
    background-color: #f6f7f9
}

.bg-gray-2 {
    background-color: #f2f2f2
}

.bg-gray-3 {
    background-color: #d9d9d9
}

.bg-gray-4 {
    background-color: #ccc
}

.bg-gray-5 {
    background-color: #a6a6a6
}

.bg-gray-6 {
    background-color: #737373
}

.bg-gray-7 {
    background-color: #404040
}

.bg-black {
    background-color: #000
}

.bg-gradient-1 {
    background: linear-gradient(to right, #f58220 0%, #ee3224 100%)
}

.bg-gradient-2 {
    background: linear-gradient(to bottom, #fff 0%, #f6f6f6 100%)
}

.text-white {
    color: #fff
}

.text-gray-1 {
    color: #f6f7f9
}

.text-gray-2 {
    color: #f2f2f2
}

.text-gray-3 {
    color: #d9d9d9
}

.text-gray-4 {
    color: #ccc
}

.text-gray-5 {
    color: #a6a6a6
}

.text-gray-6 {
    color: #737373
}

.text-gray-7 {
    color: #404040
}

.text-black {
    color: #000
}

.text-orange {
    color: #f68a1f
}

.text-red {
    color: #ee3324
}

.fz-12 {
    font-size: .75rem
}

.fz-14 {
    font-size: .875rem
}

.fz-16 {
    font-size: 1rem
}

.fz-18 {
    font-size: 1.125rem
}

.fz-20 {
    font-size: 1.25rem
}

.fz-24 {
    font-size: 1.5rem
}

.fz-28 {
    font-size: 1.75rem
}

.fz-36 {
    font-size: 2.25rem
}

.fz-40 {
    font-size: 2.5rem
}

.fz-50 {
    font-size: 3.125rem
}

.fz-60 {
    font-size: 3.75rem
}

.fw-1 {
    font-weight: 100
}

.fw-4 {
    font-weight: 400
}

.fw-9 {
    font-weight: 900
}

.col-12 {
    flex: 0 0 100%
}

.col-11 {
    flex: 0 0 91.6666666667%
}

.col-10 {
    flex: 0 0 83.3333333333%
}

.col-9 {
    flex: 0 0 75%
}

.col-8 {
    flex: 0 0 66.6666666667%
}

.col-7 {
    flex: 0 0 58.3333333333%
}

.col-6 {
    flex: 0 0 50%
}

.col-5 {
    flex: 0 0 41.6666666667%
}

.col-4 {
    flex: 0 0 33.3333333333%
}

.col-3 {
    flex: 0 0 25%
}

.col-2 {
    flex: 0 0 16.6666666667%
}

.col-1 {
    flex: 0 0 8.3333333333%
}

@media (min-width: 576px) {
    .col-sm-12 {
        flex: 0 0 100%
    }
}

@media (min-width: 768px) {
    .col-md-12 {
        flex: 0 0 100%
    }
}

@media (min-width: 992px) {
    .col-lg-12 {
        flex: 0 0 100%
    }
}

@media (min-width: 1280px) {
    .col-xl-12 {
        flex: 0 0 100%
    }
}

@media (min-width: 1440px) {
    .col-xxl-12 {
        flex: 0 0 100%
    }
}

@media (min-width: 576px) {
    .col-sm-11 {
        flex: 0 0 91.6666666667%
    }
}

@media (min-width: 768px) {
    .col-md-11 {
        flex: 0 0 91.6666666667%
    }
}

@media (min-width: 992px) {
    .col-lg-11 {
        flex: 0 0 91.6666666667%
    }
}

@media (min-width: 1280px) {
    .col-xl-11 {
        flex: 0 0 91.6666666667%
    }
}

@media (min-width: 1440px) {
    .col-xxl-11 {
        flex: 0 0 91.6666666667%
    }
}

@media (min-width: 576px) {
    .col-sm-10 {
        flex: 0 0 83.3333333333%
    }
}

@media (min-width: 768px) {
    .col-md-10 {
        flex: 0 0 83.3333333333%
    }
}

@media (min-width: 992px) {
    .col-lg-10 {
        flex: 0 0 83.3333333333%
    }
}

@media (min-width: 1280px) {
    .col-xl-10 {
        flex: 0 0 83.3333333333%
    }
}

@media (min-width: 1440px) {
    .col-xxl-10 {
        flex: 0 0 83.3333333333%
    }
}

@media (min-width: 576px) {
    .col-sm-9 {
        flex: 0 0 75%
    }
}

@media (min-width: 768px) {
    .col-md-9 {
        flex: 0 0 75%
    }
}

@media (min-width: 992px) {
    .col-lg-9 {
        flex: 0 0 75%
    }
}

@media (min-width: 1280px) {
    .col-xl-9 {
        flex: 0 0 75%
    }
}

@media (min-width: 1440px) {
    .col-xxl-9 {
        flex: 0 0 75%
    }
}

@media (min-width: 576px) {
    .col-sm-8 {
        flex: 0 0 66.6666666667%
    }
}

@media (min-width: 768px) {
    .col-md-8 {
        flex: 0 0 66.6666666667%
    }
}

@media (min-width: 992px) {
    .col-lg-8 {
        flex: 0 0 66.6666666667%
    }
}

@media (min-width: 1280px) {
    .col-xl-8 {
        flex: 0 0 66.6666666667%
    }
}

@media (min-width: 1440px) {
    .col-xxl-8 {
        flex: 0 0 66.6666666667%
    }
}

@media (min-width: 576px) {
    .col-sm-7 {
        flex: 0 0 58.3333333333%
    }
}

@media (min-width: 768px) {
    .col-md-7 {
        flex: 0 0 58.3333333333%
    }
}

@media (min-width: 992px) {
    .col-lg-7 {
        flex: 0 0 58.3333333333%
    }
}

@media (min-width: 1280px) {
    .col-xl-7 {
        flex: 0 0 58.3333333333%
    }
}

@media (min-width: 1440px) {
    .col-xxl-7 {
        flex: 0 0 58.3333333333%
    }
}

@media (min-width: 576px) {
    .col-sm-6 {
        flex: 0 0 50%
    }
}

@media (min-width: 768px) {
    .col-md-6 {
        flex: 0 0 50%
    }
}

@media (min-width: 992px) {
    .col-lg-6 {
        flex: 0 0 50%
    }
}

@media (min-width: 1280px) {
    .col-xl-6 {
        flex: 0 0 50%
    }
}

@media (min-width: 1440px) {
    .col-xxl-6 {
        flex: 0 0 50%
    }
}

@media (min-width: 576px) {
    .col-sm-5 {
        flex: 0 0 41.6666666667%
    }
}

@media (min-width: 768px) {
    .col-md-5 {
        flex: 0 0 41.6666666667%
    }
}

@media (min-width: 992px) {
    .col-lg-5 {
        flex: 0 0 41.6666666667%
    }
}

@media (min-width: 1280px) {
    .col-xl-5 {
        flex: 0 0 41.6666666667%
    }
}

@media (min-width: 1440px) {
    .col-xxl-5 {
        flex: 0 0 41.6666666667%
    }
}

@media (min-width: 576px) {
    .col-sm-4 {
        flex: 0 0 33.3333333333%
    }
}

@media (min-width: 768px) {
    .col-md-4 {
        flex: 0 0 33.3333333333%
    }
}

@media (min-width: 992px) {
    .col-lg-4 {
        flex: 0 0 33.3333333333%
    }
}

@media (min-width: 1280px) {
    .col-xl-4 {
        flex: 0 0 33.3333333333%
    }
}

@media (min-width: 1440px) {
    .col-xxl-4 {
        flex: 0 0 33.3333333333%
    }
}

@media (min-width: 576px) {
    .col-sm-3 {
        flex: 0 0 25%
    }
}

@media (min-width: 768px) {
    .col-md-3 {
        flex: 0 0 25%
    }
}

@media (min-width: 992px) {
    .col-lg-3 {
        flex: 0 0 25%
    }
}

@media (min-width: 1280px) {
    .col-xl-3 {
        flex: 0 0 25%
    }
}

@media (min-width: 1440px) {
    .col-xxl-3 {
        flex: 0 0 25%
    }
}

@media (min-width: 576px) {
    .col-sm-2 {
        flex: 0 0 16.6666666667%
    }
}

@media (min-width: 768px) {
    .col-md-2 {
        flex: 0 0 16.6666666667%
    }
}

@media (min-width: 992px) {
    .col-lg-2 {
        flex: 0 0 16.6666666667%
    }
}

@media (min-width: 1280px) {
    .col-xl-2 {
        flex: 0 0 16.6666666667%
    }
}

@media (min-width: 1440px) {
    .col-xxl-2 {
        flex: 0 0 16.6666666667%
    }
}

@media (min-width: 576px) {
    .col-sm-1 {
        flex: 0 0 8.3333333333%
    }
}

@media (min-width: 768px) {
    .col-md-1 {
        flex: 0 0 8.3333333333%
    }
}

@media (min-width: 992px) {
    .col-lg-1 {
        flex: 0 0 8.3333333333%
    }
}

@media (min-width: 1280px) {
    .col-xl-1 {
        flex: 0 0 8.3333333333%
    }
}

@media (min-width: 1440px) {
    .col-xxl-1 {
        flex: 0 0 8.3333333333%
    }
}

.br-10 {
    border-radius: 10px
}

.br-12 {
    border-radius: 12px
}

.br-17 {
    border-radius: 17px
}

.br-20 {
    border-radius: 20px
}

.br-22 {
    border-radius: 22px
}

.bs-6 {
    box-shadow: 0 3px 6px #00000029
}

.bs-7 {
    box-shadow: 0 3px 7px #0000004d
}

.bs-10 {
    box-shadow: 0 3px 10px #00000021
}

.bs-15 {
    box-shadow: 0 2px 15px #00000029
}

.bs-40 {
    box-shadow: 0 3px 40px #0000000d
}

.d-none {
    display: none
}

.d-block {
    display: block
}

.d-inline {
    display: inline
}

.d-inline-block {
    display: inline-block
}

.d-flex {
    display: flex
}

.d-inline-flex {
    display: inline-flex
}

.d-grid {
    display: grid
}

.d-inline-grid {
    display: inline-grid
}

@media (min-width: 576px) {
    .d-sm-none {
        display: none
    }
}

@media (min-width: 768px) {
    .d-md-none {
        display: none
    }
}

@media (min-width: 992px) {
    .d-lg-none {
        display: none
    }
}

@media (min-width: 1280px) {
    .d-xl-none {
        display: none
    }
}

@media (min-width: 1440px) {
    .d-xxl-none {
        display: none
    }
}

@media (min-width: 576px) {
    .d-sm-block {
        display: block
    }
}

@media (min-width: 768px) {
    .d-md-block {
        display: block
    }
}

@media (min-width: 992px) {
    .d-lg-block {
        display: block
    }
}

@media (min-width: 1280px) {
    .d-xl-block {
        display: block
    }
}

@media (min-width: 1440px) {
    .d-xxl-block {
        display: block
    }
}

@media (min-width: 576px) {
    .d-sm-inline {
        display: inline
    }
}

@media (min-width: 768px) {
    .d-md-inline {
        display: inline
    }
}

@media (min-width: 992px) {
    .d-lg-inline {
        display: inline
    }
}

@media (min-width: 1280px) {
    .d-xl-inline {
        display: inline
    }
}

@media (min-width: 1440px) {
    .d-xxl-inline {
        display: inline
    }
}

@media (min-width: 576px) {
    .d-sm-inline-block {
        display: inline-block
    }
}

@media (min-width: 768px) {
    .d-md-inline-block {
        display: inline-block
    }
}

@media (min-width: 992px) {
    .d-lg-inline-block {
        display: inline-block
    }
}

@media (min-width: 1280px) {
    .d-xl-inline-block {
        display: inline-block
    }
}

@media (min-width: 1440px) {
    .d-xxl-inline-block {
        display: inline-block
    }
}

@media (min-width: 576px) {
    .d-sm-flex {
        display: flex
    }
}

@media (min-width: 768px) {
    .d-md-flex {
        display: flex
    }
}

@media (min-width: 992px) {
    .d-lg-flex {
        display: flex
    }
}

@media (min-width: 1280px) {
    .d-xl-flex {
        display: flex
    }
}

@media (min-width: 1440px) {
    .d-xxl-flex {
        display: flex
    }
}

@media (min-width: 576px) {
    .d-sm-inline-flex {
        display: inline-flex
    }
}

@media (min-width: 768px) {
    .d-md-inline-flex {
        display: inline-flex
    }
}

@media (min-width: 992px) {
    .d-lg-inline-flex {
        display: inline-flex
    }
}

@media (min-width: 1280px) {
    .d-xl-inline-flex {
        display: inline-flex
    }
}

@media (min-width: 1440px) {
    .d-xxl-inline-flex {
        display: inline-flex
    }
}

@media (min-width: 576px) {
    .d-sm-grid {
        display: grid
    }
}

@media (min-width: 768px) {
    .d-md-grid {
        display: grid
    }
}

@media (min-width: 992px) {
    .d-lg-grid {
        display: grid
    }
}

@media (min-width: 1280px) {
    .d-xl-grid {
        display: grid
    }
}

@media (min-width: 1440px) {
    .d-xxl-grid {
        display: grid
    }
}

@media (min-width: 576px) {
    .d-sm-inline-grid {
        display: inline-grid
    }
}

@media (min-width: 768px) {
    .d-md-inline-grid {
        display: inline-grid
    }
}

@media (min-width: 992px) {
    .d-lg-inline-grid {
        display: inline-grid
    }
}

@media (min-width: 1280px) {
    .d-xl-inline-grid {
        display: inline-grid
    }
}

@media (min-width: 1440px) {
    .d-xxl-inline-grid {
        display: inline-grid
    }
}

.z-1 {
    z-index: 1
}

.z-2 {
    z-index: 2
}

.z-3 {
    z-index: 3
}

.z-4 {
    z-index: 4
}

.z-5 {
    z-index: 5
}

.z-6 {
    z-index: 6
}

.z-7 {
    z-index: 7
}

.z-8 {
    z-index: 8
}

.z-9 {
    z-index: 9
}

.z-alert {
    z-index: 9000
}

.z-modal {
    z-index: 8000
}

.z-header {
    z-index: 7000
}

.z-cover {
    z-index: 6000
}

.z-default {
    z-index: 1
}

.z-below {
    z-index: -1
}

.z-bottomless-pit {
    z-index: -9000
}

.floating-btn {
    position: fixed;
    right: 6px;
    bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 42px;
    height: 42px;
    background-color: #fff;
    border-radius: 1000px;
    z-index: 6000;
    box-shadow: 0 3px 16px #00000030;
    transition: .2s;
    cursor: pointer
}

.floating-btn:hover {
    box-shadow: 0 0 10px #00000050
}

@media (min-width: 992px) {
    .floating-btn {
        right: 1.75rem;
        bottom: 1.75rem;
        width: 3.5rem;
        height: 3.5rem
    }
}

@-webkit-keyframes stretch {
    0% {
        height: 0
    }

    to {
        height: 1500px
    }
}

@keyframes stretch {
    0% {
        height: 0
    }

    to {
        height: 1500px
    }
}

.stretch-enter-active {
    overflow: hidden;
    -webkit-animation: stretch 1s;
    animation: stretch 1s
}

.stretch-leave-active {
    animation: stretch .3s reverse
}

.new-header {
    --header-height--mobile: 40px;
    --header-height--pc: 60px;
    --nav-height--pc: 60px;
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 7000;
}

.new-header>.header-info {
    padding: 0 .25rem
}

.new-header .nav-list-root--wrapper {
    position: absolute;
    top: var(--header-height--mobile);
    width: 100%;
    background: #fff;
    z-index: 7000;
    transition: .2s linear
}

@media (min-width: 1200px) {
    .new-header .nav-list-root--wrapper {
        /* top: var(--header-height--pc); */
        top: v-bind(props.top);
        box-shadow: 0 6px 6px #00000029
    }

    .new-header .nav-list-root--wrapper:after {
        position: absolute;
        content: "";
        top: calc(var(--nav-height--pc) - 1px);
        width: 100%;
        height: 4px;
        background: linear-gradient(to right, #cd2617 0%, #e42416 100%)
    }
}

@media (min-width: 1200px) and (max-width: 1600px) {
    .new-header>.header-info {
        padding-bottom: 0
    }

    .new-header>.header-info .header-info-bar {
        height: 60px
    }

    .new-header>.header-info .header-info-bar .logo--wrapper,
    .new-header>.header-info .header-info-bar .user-related--wrapper {
        z-index: 7001
    }

    .new-header>.header-info .header-info-bar .profile-image {
        width: 32px !important;
        height: 32px !important
    }

    .new-header .nav-list-root--wrapper {
        position: absolute;
        top: 0;
        transition: .2s linear
    }

    .new-header .nav-list-root--wrapper .nav-list--root {
        max-width: 700px
    }
}

@media (min-width: 1200px) {
    .new-header.scrolled>.header-info {
        padding-bottom: 0
    }

    .new-header.scrolled>.header-info .header-info-bar {
        height: 60px
    }

    .new-header.scrolled>.header-info .header-info-bar .logo--wrapper,
    .new-header.scrolled>.header-info .header-info-bar .user-related--wrapper {
        z-index: 7001
    }

    .new-header.scrolled>.header-info .header-info-bar .profile-image {
        width: 32px !important;
        height: 32px !important
    }

    .new-header.scrolled .nav-list-root--wrapper {
        position: absolute;
        top: 0;
        transition: .2s linear
    }

    .new-header.scrolled .nav-list-root--wrapper .nav-list--root {
        max-width: 700px
    }
}

@media (min-width: 1600px) {
    .new-header.scrolled>.header-info .header-info-bar {
        max-width: unset
    }

    .new-header.scrolled .nav-list-root--wrapper .nav-list--root {
        margin: auto;
        max-width: 1200px
    }
}

.new-header-padding {
    --header-height--pc: 60px;
    --nav-height--pc: 60px;
    display: block;
    height: 80px
}

@media (min-width: 1200px) {
    .new-header-padding {
        width: 100%;
        height: var(--header-height--pc);
        transition: .2s linear
    }

    .new-header-padding.scrolled {
        height: var(--header-height--pc);
        transition: .2s linear
    }
}

@media (min-width: 1600px) {
    .new-header-padding {
        height: calc(var(--header-height--pc) + var(--nav-height--pc))
    }
}
</style>