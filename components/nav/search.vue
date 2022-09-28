<template>
    <div>
        <div class="search-container">
            <div class="search-container-input">
                <v-icon>mdi-magnify</v-icon>
                <input type="text" placeholder="請輸入關鍵字搜尋">
                <button>查詢</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.search-container {
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #d5d5d7;
    padding-bottom: 1.2rem;
    margin-bottom: 5rem;

    :hover .v-icon {
        color: black;
    }

    &-input {
        border: 1px solid rgb(225, 224, 224);
        border-radius: 20px;
        margin: 3rem 0;

        .v-icon {
            font-size: 20px;
            color: gray;
            padding: 0 1rem 0 1.5rem;
        }

        input {
            padding: .8rem 5rem .8rem .2rem;
            font-size: 15px;
            border-color: transparent;
            outline: none;

        }

        ::placeholder {
            color: rgb(202, 202, 202);
        }

        button {
            background-image: linear-gradient(to right, rgb(199, 33, 33), rgb(230, 135, 11));
            color: #fff;
            padding: .5rem 1rem;
            margin-right: .2rem;
            border-radius: 35px;
        }
    }
}
</style>