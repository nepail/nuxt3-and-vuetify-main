<template>
    <div>
        <slot name="top"></slot>
        <div class="wrapper">
            <banner-title :title="btitle">
                <div class="wrapper-container">
                    <div class="wrapper-container-bottom">
                        <div class="wrapper-container-bottom-container">
                            <slot name="content"></slot>
                        </div>
                    </div>
                </div>
            </banner-title>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        btitle: String
    })
    
    const { btitle } = toRefs(props)

</script>

<style lang="scss">
$medium: 768px;
$big: 992px;
$large: 1200px;

.wrapper {
    .loading {
        position: relative;
        z-index: 1;
    }
}
</style>