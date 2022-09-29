<template>
    <div>
        <div class="category">
            <p class="category-chip">BB電子</p>
            <div class="category-calendar">
                <v-icon>mdi-calendar</v-icon>
                <p>September 05,2022</p>
            </div>

        </div>

        <div class="mainContent-title">
            <p class="title">{{ title }}</p>
            <p class="subTitle">盤面擴展 旋轉再爆獎</p>
        </div>
        <div class="mainContent-cover">
            <img src="https://picsum.photos/1200/700?random=1" alt="">
        </div>

        <div class="mainContent-container">
            <div class="mainContent-content">
                <div class="mainContent-content-demo">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus id quo
                        veritatis ea rem minima laboriosam nisi, blanditiis officiis aperiam voluptate consequuntur
                        maiores ipsam, voluptas dolorem! Laborum, commodi ipsam.</p>
                    <img src="https://picsum.photos/200/100?random=5" alt="">
                </div>
            </div>

            <div class="mainContent-content-chidTitle">
                <p>遊戲特色</p>
            </div>

            <div class="mainContent-content">
                <ul>
                    <li>分散符號：任意出現３個分散符號，即可獲得派獎</li>
                    <li>啟動格：</li>
                </ul>
                <ol>
                    <li>當畫面內2個以上滾輪出現啟動格相同符號，即可獲得重新旋轉</li>
                    <li>當畫面內2個以上滾輪出現啟動格相同符號，即可獲得重新旋轉</li>
                </ol>
                <ul>
                    <li>分散符號：任意出現３個分散符號，即可獲得派獎</li>
                    <li>啟動格：</li>
                </ul>
                <ol>
                    <li>當畫面內2個以上滾輪出現啟動格相同符號，即可獲得重新旋轉</li>
                    <li>當畫面內2個以上滾輪出現啟動格相同符號，即可獲得重新旋轉</li>
                </ol>
            </div>

            <div class="mainContent-content-chidTitle">
                <p>基本資訊</p>
            </div>
            <div class="mainContent-content">
                <ul>
                    <li>分散符號：任意出現３個分散符號，即可獲得派獎</li>
                    <li>啟動格：</li>
                </ul>
                <ol>
                    <li>當畫面內2個以上滾輪出現啟動格相同符號，即可獲得重新旋轉</li>
                    <li>當畫面內2個以上滾輪出現啟動格相同符號，即可獲得重新旋轉</li>
                </ol>
                <ul>
                    <li>分散符號：任意出現３個分散符號，即可獲得派獎</li>
                    <li>啟動格：</li>
                </ul>
                <ol>
                    <li>當畫面內2個以上滾輪出現啟動格相同符號，即可獲得重新旋轉</li>
                    <li>當畫面內2個以上滾輪出現啟動格相同符號，即可獲得重新旋轉</li>
                </ol>
            </div>
        </div>


    </div>

</template>

<script setup>

const props = defineProps({
    title: String
})

const { title } = toRefs(props)

</script>

<style lang="scss" scoped>
.category {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;

    &-chip {
        color: #fff;
        background-color: rgba(190, 14, 14, 0.971);
        padding: 4px 8px;
        border-radius: 35px;
    }

    &-calendar {
        display: flex;
        color: rgba(255, 42, 0, 0.753);
        font-size: 12px;
        margin-left: .5rem;
    }
}

.mainContent {
    &-title {
        font-size: 22px;
        font-weight: bolder;
        margin-bottom: 1.2rem;
        border-bottom: 1px solid rgba(250, 246, 246, 0.956);

        .subTitle {
            font-size: 1rem;
            padding: 1rem 0 1.5rem 0;
        }
    }

    &-cover {
        padding: 1.5rem 0;
        overflow: hidden;

        img {
            border-radius: 20px;
        }
    }

    &-contentImg {
        overflow: hidden;
        padding: 1rem 0;
    }

    &-content {
        line-height: 2.5;
        font-weight: bolder;
        margin-bottom: 2rem;

        li{
            margin-left: 20px;
        }
        p {
            line-height: 1.9;
            margin-bottom: 1.5rem;
        }

        &-chidTitle {
            border-top: 1px solid rgb(212, 212, 212);
            border-bottom: 1px solid rgb(212, 212, 212);
            
            font-size: 23px;
            font-weight: 600;
            padding: 1rem 0;
            margin: 1.3rem 0;
        }

        &-demo{
            display: flex;
            margin-top: 1.2rem;
            img{
                height: 120px;
                width: 250px;
                border-radius: 25px;
            }
        }
    }
}
</style>