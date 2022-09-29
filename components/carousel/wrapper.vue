<template>
    <div class="breakpoint">
        <div class="slider">
            <!-- 輪播圖位置 -->
            <div class="sliderWrapper">
                <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover"
                    delimiter-icon="mdi-color-helper" color="white" v-model="contIndex">
                    <!-- 自訂Arrows插槽 -->
                    <template v-slot:prev="{ props }">
                        <v-btn class="wrapper-btn left" @click="props.onClick">
                            <v-icon color="white">mdi-chevron-left</v-icon>
                        </v-btn>
                    </template>
                    <template v-slot:next="{ props }">
                        <v-btn class="wrapper-btn right" @click="props.onClick">
                            <v-icon color="white">mdi-chevron-right</v-icon>
                        </v-btn>
                    </template>
                    <nuxt-link to="/about">
                        <v-carousel-item height="400" v-for="(content, i) in contents" :src="content.src" :key="i">
                            <div class="content">
                                <h3>{{ content.description}}</h3>
                                <h4>123123</h4>
                            </div>
                        </v-carousel-item>
                    </nuxt-link>

                </v-carousel>
            </div>
            <!-- 輪播列表 -->
            <div class="sliderSideInfo scrollbar" ref="scroller">
                <div class="sliderSideInfoItem" :class="{active: contIndex === index}" v-for="(item, index) in contents"
                    :key="item" @click="onWrapperClick($event, item, index)">
                    <h3>{{ item.description }}</h3>
                </div>
            </div>
        </div>
    </div>

    <div class="breakpoint-mobile">
        <div class="breakpoint-card-list">
            <v-carousel height="400" hide-delimiter-background :show-arrows="false">
                <v-carousel-item v-for="(carItem, i) in contentMobile" :key="i">
                    <v-sheet height="100%">
                        <div class="swiper-wrapper">
                            <div class="card-item" v-for="(item, i) in carItem" :key="i">
                                <div class="cover">
                                    <v-img :src="item.src"></v-img>
                                </div>
                                <div class="card-item-content">
                                    <h3>{{item.title}}</h3>
                                    <h5>{{item.description}}</h5>
                                    <div class="card-item-content-calendar">
                                        <v-icon>mdi-calendar</v-icon>
                                        <p>{{item.time}}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card-swiper-btn">

                            </div>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>

<script setup>

const contents = [
    { time:'2022.09.01', title:'大買家', description: '快來大買家，好禮送不完', src: 'https://picsum.photos/600/400?random=1' },
    { time:'2022.09.02', title:'台中經船', description: '台中驚傳有經船的驚傳，嚇死寶寶', src: 'https://picsum.photos/600/400?random=2' },
    { time:'2022.09.03', title:'寶寶不要哭',description: '寶寶不哭，哭不哭大寶寶，寶寶哭', src: 'https://picsum.photos/600/400?random=3' },
    { time:'2022.09.04', title:'體育賠率',description: '體育的賠率，體育賠率，體育賠率，體育賠率，體育賠率，體育賠率，體育賠率體育賠率，體育賠率，', src: 'https://picsum.photos/600/400?random=4' },
    { time:'2022.09.05', title:'明天星期六',description: '明天是星期六，後天是星期日', src: 'https://picsum.photos/600/400?random=5' },
    { time:'2022.09.06', title:'非洲',description: '在非洲每過60秒，就有一分鐘過去', src: 'https://picsum.photos/600/400?random=6' },
    { time:'2022.09.07', title:'寶寶壽司',description: '寶寶葬壽司，寶寶壽司', src: 'https://picsum.photos/600/400?random=7' },
    { time:'2022.09.08', title:'上班丸',description: '丸上班，上班丸不完', src: 'https://picsum.photos/600/400?random=8' },
    { time:'2022.09.01', title:'大買家', description: '快來大買家，好禮送不完', src: 'https://picsum.photos/600/400?random=1' },
    { time:'2022.09.02', title:'台中經船', description: '台中驚傳有經船的驚傳，嚇死寶寶', src: 'https://picsum.photos/600/400?random=2' },
    { time:'2022.09.03', title:'寶寶不要哭',description: '寶寶不哭，哭不哭大寶寶，寶寶哭', src: 'https://picsum.photos/600/400?random=3' },
    { time:'2022.09.04', title:'體育賠率',description: '體育的賠率，體育賠率，體育賠率，體育賠率，體育賠率，體育賠率，體育賠率體育賠率，體育賠率，', src: 'https://picsum.photos/600/400?random=4' },
    { time:'2022.09.05', title:'明天星期六',description: '明天是星期六，後天是星期日', src: 'https://picsum.photos/600/400?random=5' },
    { time:'2022.09.06', title:'非洲',description: '在非洲每過60秒，就有一分鐘過去', src: 'https://picsum.photos/600/400?random=6' },
    { time:'2022.09.07', title:'寶寶壽司',description: '寶寶葬壽司，寶寶壽司', src: 'https://picsum.photos/600/400?random=7' },
    { time:'2022.09.08', title:'上班丸',description: '丸上班，上班丸不完', src: 'https://picsum.photos/600/400?random=8' },
    { time:'2022.09.05', title:'明天星期六',description: '明天是星期六，後天是星期日', src: 'https://picsum.photos/600/400?random=5' },
    { time:'2022.09.06', title:'非洲',description: '在非洲每過60秒，就有一分鐘過去', src: 'https://picsum.photos/600/400?random=6' },
    { time:'2022.09.07', title:'寶寶壽司',description: '寶寶葬壽司，寶寶壽司', src: 'https://picsum.photos/600/400?random=7' },
    { time:'2022.09.08', title:'上班丸',description: '丸上班，上班丸不完', src: 'https://picsum.photos/600/400?random=8' },
    { time:'2022.09.01', title:'大買家', description: '快來大買家，好禮送不完', src: 'https://picsum.photos/600/400?random=1' },
    { time:'2022.09.02', title:'台中經船', description: '台中驚傳有經船的驚傳，嚇死寶寶', src: 'https://picsum.photos/600/400?random=2' },
    { time:'2022.09.03', title:'寶寶不要哭',description: '寶寶不哭，哭不哭大寶寶，寶寶哭', src: 'https://picsum.photos/600/400?random=3' },
]

const contentMobile = []
const chunk = 3
for(let i = 0, j = contents.length; i < j; i+=chunk){
    contentMobile.push(contents.slice(i, i + chunk))
}

const onWrapperClick = (event, item, index) => {
    contIndex.value = index
}

const contIndex = ref(0)
const emit = defineEmits(['change-wrapper'])


const scroller = ref()
watch((contIndex),(o, n)=>{

    let childNodeHeight = scroller.value.childNodes[1].clientHeight
    let scrollerHeight = scroller.value.clientHeight
    scroller.value.scrollTo({
        top: childNodeHeight*o-scrollerHeight/2+30,
        behavior: 'smooth'
    })
})

</script>

<style lang="scss" scoped>
.breakpoint {
    display: none;
}

.slider {
    display: grid;
    overflow: hidden;
    max-width: 800px;
    max-height: 370px;
    border-radius: 20px;
    box-shadow: 0 3px 10px #00000021;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(4, 1fr);
    animation: fade .4s ease-in-out;
}

.sliderWrapper {
    position: relative;
    overflow: hidden;
    grid-column: 1/4;

    &:hover .right,
    &:hover .left {
        opacity: 1;
    }
}

.sliderSideInfo {
    overflow-y: auto;
    height: 100%;
    grid-column: 4/5;

    .sliderSideInfoItem {
        display: flex;
        align-items: center;
        padding: 1rem;
        height: 20%;
        line-height: 1.3;
        color: #404040;
        border-bottom: 1px solid #d9d9d9;
        cursor: pointer;

        h3 {
            font-size: 14px;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 1.4;

            &:hover {
                color: #ee3324;
            }
        }

    }

    .sliderSideInfoItem.active {
        color: #ee3324;
    }
}

.v-carousel-item {
    .content {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        padding: 1rem 1rem 3rem;
        color: #fff;
        z-index: 2;

        h3 {
            padding-bottom: 0.75rem;
            font-size: 1.5rem;
        }

        h4 {
            font-size: 1rem;
        }
    }
}

.wrapper-btn {
    position: absolute !important;
    top: 36%;
    bottom: 0;
    // background-color: rgba(255,255,255,0.2) !important;
    background: linear-gradient(to right, rgba(255, 255, 255, .2) 0%, rgba(255, 255, 255, .5) 100%);
    min-width: 30px !important;
    height: 25% !important;
    padding: 0 !important;
    opacity: 0;
    transition: all .5s;

    &:hover {
        background-color: #ee3324;
    }
}

.wrapper-btn.right {
    right: 0px;
    border-radius: 1rem 0rem 0rem 1rem !important;

    &:hover {
        opacity: 1;
    }
}

.wrapper-btn.left {
    left: 0px;
    border-radius: 0 1rem 1rem 0 !important;

    &:hover {
        opacity: 1;
    }
}

.breakpoint-mobile {
    display: unset;

    .breakpoint-card-list {
        overflow-x: hidden;
        width: 100%;
        min-height: 366px;
        .v-carousel__controls{
            // background: black;
            
            .v-btn--icon{
                font-size: 1px !important;
                color: gray;
            }
            .v-btn--selected{
                color: #ee3324 !important;
            }
            .v-btn--icon.v-btn--density-default{
                width: calc(var(--v-btn-height) );
            }
        }
    }
}

.swiper-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    flex-direction: column;
    color: black !important;
    .v-window__controls{
        button{
            background: none !important;
        }
    }
    .card-item{
        background-color: white;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        padding: 0.75rem 0.1rem;
        border-bottom: 1px solid #d9d9d9;
        .cover{
            width:20%;
            height: 100%;
            // border: 1px solid #d9d9d9;
        }
        .card-item-content{
            margin-left: 15px;
            width:80%;
            height: 100%;
            // border: 1px solid #d9d9d9;
            display: flex;
            flex-direction: column;
            h3{
                font-size: 1rem;
                line-height: 1.3;
                color: #404040;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
            h5{
                font-size: .875rem;
                line-height: 1.6;
                color: #737373;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
            .card-item-content-calendar{
                display: flex;
                // justify-content: space-between;
                padding-top: 1.25rem;
                font-size: .875rem;
                color: #ee3324;
            }
        }
    }
    .card-swiper-btn{
        background-color:#fff;
        height: 90%;
        width: var(--v-btn-height);

    }
}

@media (min-width: 992px) {
    .breakpoint {
        display: unset;
    }
    .breakpoint-mobile{
        display: none;
    }
}
</style>