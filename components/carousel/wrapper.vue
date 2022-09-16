<template>
    <div class="breakpoint">
        <div class="slider">
            <!-- 輪播圖位置 -->
            <div class="sliderWrapper">
                <!-- <div>{{contIndex}}</div> -->
                <v-carousel 
                    cycle 
                    height="400" 
                    hide-delimiter-background 
                    show-arrows="hover" 
                    delimiter-icon="mdi-color-helper"
                    color="white"
                    v-model="contIndex"
                    >
                    <!-- 自訂Arrows插槽 -->
                    <!-- <template v-slot:prev="{ props }">
                        <v-btn variant="elevated" color="success" @click="props.onClick">Previous slide</v-btn>
                    </template>
                    <template v-slot:next="{ props }">
                        <v-btn variant="elevated" color="info" @click="props.onClick">Next slide</v-btn>
                    </template> -->
                    <nuxt-link to="/about">
                        <v-carousel-item 
                            v-for="(content, i) in contents" 
                            :src="content.src"
                            :key="i">
                            <div class="content">
                                <h3>{{ content.description}}</h3>
                                <h4>123123</h4>
                            </div>
                        <!-- <v-sheet :color="colors[i]" height="100%">
                            <div class="d-flex fill-height justify-center align-center">
                                <div class="text-h2">
                                    {{ content }}
                                </div>
                            </div>
                        </v-sheet> -->
                        </v-carousel-item>
                    </nuxt-link>

                </v-carousel>
            </div>
            <!-- 輪播列表 -->
            <div class="sliderSideInfo scrollbar">
                <div 
                    class="sliderSideInfoItem" 
                    :class="{active: selected === index}" 
                    v-for="(item, index) in contents" 
                    :key="item"
                    @click="emit('change-wrapper', index),onWrapperClick($event, item, index)"
                    >
                    <h3>{{ item.description }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    selected: Number
})

const { selected } = toRefs(props)

console.log(props)

const contents=[
    {description:'快來大買家，好禮送不完',src:'https://picsum.photos/600/400?random=1'},
    {description:'台中驚傳有經船的驚傳，嚇死寶寶', src:'https://picsum.photos/600/400?random=2'},
    {description:'寶寶不哭，哭不哭大寶寶，寶寶哭', src:'https://picsum.photos/600/400?random=3'},
    {description:'體育的賠率，體育賠率，體育賠率，體育賠率，體育賠率，體育賠率，體育賠率體育賠率，體育賠率，', src:'https://picsum.photos/600/400?random=4'},
    {description:'明天是星期六，後天是星期日', src:'https://picsum.photos/600/400?random=5'},
    {description:'在非洲每過60秒，就有一分鐘過去', src:'https://picsum.photos/600/400?random=6'}
]

const onWrapperClick=(event, item, index)=>{
    // console.log(event)
    // console.log(item)
    // console.log(index)
    // console.log(props)
    contIndex.value = index
}

//輪播圖
const colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
]

const slides = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
]

const contIndex = ref(0)
const emit = defineEmits(['change-wrapper'])

watch(()=> contIndex, (index) =>{
    emit('change-wrapper', index.value)
},{
    deep: true
})

</script>



<style lang="scss">
    .breakpoint{
        display: none;
    }

    .slider{
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

    .sliderWrapper{
        position:relative;
        overflow: hidden;
        grid-column: 1/4;
    }

    .sliderSideInfo{
        overflow-y: auto;
        height: 100%;
        grid-column: 4/5;
        .sliderSideInfoItem{
            display: flex;
            align-items: center;
            padding: 1rem;
            height: 20%;
            line-height: 1.3;
            color: #404040;
            border-bottom: 1px solid #d9d9d9;
            cursor: pointer;
            h3{
                font-size: 14px;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                line-height: 1.4;
            }
            h3:hover{
                color: #ee3324;
            }
        }
        .sliderSideInfoItem.active{
            color: #ee3324;
        }
    }

    .v-carousel-item{
        .content{
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            padding: 1rem 1rem 3rem;
            color: #fff;
            z-index:2;
            h3{
                padding-bottom: 0.75rem;
                font-size: 1.5rem;
            }
            h4{
                font-size: 1rem;
            }
        }
    }

    @media (min-width: 992px){
        .breakpoint{
            display: unset;
        }
    }

</style>