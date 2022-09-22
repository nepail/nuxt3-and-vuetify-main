<template>
    <v-carousel 
        cycle 
        height="400" 
        hide-delimiter-background 
        :show-arrows="false"
        delimiter-icon="mdi-color-helper"
        color="white">
        <!-- 自訂Arrows插槽 -->
        <!-- <template v-slot:prev="{ props }">
            <v-btn variant="elevated" color="success" @click="props.onClick">Previous slide</v-btn>
        </template>
        <template v-slot:next="{ props }">
            <v-btn variant="elevated" color="info" @click="props.onClick">Next slide</v-btn>
        </template> -->
        <v-carousel-item v-for="(item, i) in contents" :key="i"
        :src="item.src" 
        reverse-transition="fade-transition"
        transition="fade-transition">
            <!-- <v-sheet :color="colors[i]" height="100%">
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">
                        {{ slide }} Slide
                    </div>
                </div>
            </v-sheet> -->
        </v-carousel-item>
    </v-carousel>
</template>
<script setup>

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

const contents = [
    { time:'2022.09.01', title:'大買家', description: '快來大買家，好禮送不完', src: 'https://picsum.photos/1200/400?random=1' },
    { time:'2022.09.02', title:'台中經船', description: '台中驚傳有經船的驚傳，嚇死寶寶', src: 'https://picsum.photos/1200/400?random=2' },
    { time:'2022.09.03', title:'寶寶不要哭',description: '寶寶不哭，哭不哭大寶寶，寶寶哭', src: 'https://picsum.photos/1200/400?random=3' },
    { time:'2022.09.04', title:'體育賠率',description: '體育的賠率，體育賠率，體育賠率，體育賠率，體育賠率，體育賠率，體育賠率體育賠率，體育賠率，', src: 'https://picsum.photos/1200/400?random=4' },
    { time:'2022.09.05', title:'明天星期六',description: '明天是星期六，後天是星期日', src: 'https://picsum.photos/1200/400?random=5' },
    { time:'2022.09.06', title:'非洲',description: '在非洲每過60秒，就有一分鐘過去', src: 'https://picsum.photos/1200/400?random=6' },
    { time:'2022.09.07', title:'寶寶壽司',description: '寶寶葬壽司，寶寶壽司', src: 'https://picsum.photos/1200/400?random=7' },
]


</script>

<style>
.v-carousel {
    border-radius: 5px;
}
</style>