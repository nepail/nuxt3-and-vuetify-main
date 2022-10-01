<template>
    <div>
        <div class="nav-container">
            <ul class="nav-container-tabs">
                <li class="nav-container-tabs-child" 
                    v-for="(item, i) in tabData" :key="i"
                    :class="{ 'active': i == props.activeKey }"
                    @click="tabClickEvent(i)"
                    >{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

const tabData: string[] = ['全部', '電子遊藝', '視訊直播', '彩票遊戲', '棋牌遊戲', '體育賽事']
const props = defineProps<{
    activeKey: number
}>()

const emits = defineEmits<{
    (e: 'tabClick', num: number): void
}>()


const tabClickEvent = (i: number) => emits('tabClick', i)

</script>

<style lang="scss" scoped>
.nav-container {
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(236, 233, 233, 0.895);
    margin: 5rem 0;

    &-tabs {
        display: flex;
        list-style: none;

        &-child {
            border: 1px solid rgba(236, 233, 233, 0.895);
            padding: .4rem 1.6rem .6rem 1.6rem;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
            position: relative;
        }

        .active {
            background-image: linear-gradient(to right, red, orange);
            border-bottom: none;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            &:after {
                content: "";
                background: linear-gradient(to right, red, orange);
                display: block;
                height: 3px;
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
    }
}
</style>