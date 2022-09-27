<template>
    <div>
        <div class="search-container">
            <div class="search-container-input">
                <input type="text" placeholder="請輸入關鍵字搜尋">
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

    &-input{
        border: 1px solid rgb(225, 224, 224);
        border-radius: 20px;
        margin: 2rem;

        input{
            padding: .8rem 5rem .8rem 1.8rem;
            font-size: 15px;
            border-color: transparent;
            outline: none;
        }

        button{
            background-image: linear-gradient(to right, rgb(199, 33, 33), rgb(230, 135, 11));
            color: #fff;
            padding: .5rem 1rem;
            margin-right: .2rem;
            border-radius: 35px;
        }
    }
}
</style>