<template>
    <div>
        <div class="search-container">
            <div class="search-container-input">
                <input type="text" placeholder="請輸入關鍵字搜尋">
            </div>
            <div class="search-container-btn">
                <button>查詢</button>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.search-container{
    display: flex;
    justify-content: flex-end;
    position: relative;
    &-input{
        border: 1px solid black;
        border-radius: 20px;
        margin: 2rem;

        input{
            padding: .8rem 5rem .8rem 1.8rem;
        }
    }

    &-btn{
        background-color: red;
        padding: .5rem;
        border-radius: 13px;
        color: #fff;
        position: absolute;
        top: 38px;
        right: 35px;
    }
}
</style>