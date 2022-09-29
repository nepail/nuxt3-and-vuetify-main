<template>
    <div class="gameList-container">
        <div class="gameList-container-left">
            <p>遊戲清單</p>
            <navTabs :activeKey="0"></navTabs>
        </div>
        <div class="gameList-container-right">
            <p class="category-type">共376款</p>
            <div class="gameList-container-right-gametype category-type">
                <p>遊戲類型</p>
                <v-icon color="orange">mdi-chevron-down</v-icon>
            </div>

            <div class="gameList-container-right-orderby category-type">
                <p>從新到舊</p>
                <v-icon color="orange">mdi-chevron-down</v-icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.gameList-container {
    display: flex;
    margin: .5rem 0 5rem 0;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width:1240px) {
        flex-direction: row;
    }

    &-left {
        display: flex;

        :deep() {
            .nav-container {
                margin: 0 1rem;
            }
        }

        p {
            color: red;
            font-weight: bolder;
            font-size: 25px;
        }
    }

    &-right {
        display: flex;
        align-content: space-around;
        flex-wrap: wrap;
        margin: 2rem 0;
        

        @media (min-width:1240px) {
            margin: 0;
        }

        &-gametype {
            display: flex;
            color: black;
        }

        &-orderby {
            display: flex;
        }

        p {
            font-size: 14px;
            align-self: center;
            cursor: pointer;
        }

        .category-type {

            @media (min-width:1240px) {
                margin-left: 3rem;
            }

            font-weight: 600;
        }
    }
}
</style>