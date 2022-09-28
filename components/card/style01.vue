<template>
    <div>
        <div class="wrapper-container-list-card">
            <div class="wrapper-container-list-card-top">
                <img src="https://picsum.photos/400/400?random=1" alt="" draggable="false">
            </div>
            <div class="wrapper-container-list-card-bottom">
                <h3>{{data.title}}</h3>
                <h4>{{data.time}}</h4>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    data: Object
})

const { data } = toRefs(props)
</script>

<style lang="scss" scoped>

</style>