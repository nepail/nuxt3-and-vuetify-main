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
        <v-carousel-item v-for="(slide, i) in slides" :key="i" 
        reverse-transition="fade-transition"
        transition="fade-transition">
            <v-sheet :color="colors[i]" height="100%">
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">
                        {{ slide }} Slide
                    </div>
                </div>
            </v-sheet>
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


</script>

<style>
.v-carousel {
    border-radius: 5px;
}
</style>