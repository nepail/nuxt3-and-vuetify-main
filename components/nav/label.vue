<template>
    <ul class="container-nav">
        <li class="container-nav-label">
            <p>全部優惠</p>
        </li>
        <li class="container-nav-label">
            <p>新會員專屬</p>
        </li>
        <li class="container-nav-label">
            <p>熱門主打</p>
        </li>
        <li class="container-nav-label">
            <p>視訊/電子</p>
        </li>
        <li class="container-nav-label">
            <p>體育</p>
        </li>
        <li class="container-nav-label">
            <p>VIP 專屬</p>
        </li>
    </ul>
</template>

<script setup>

</script>

<style lang="scss">
.container-nav {
    display: flex;
    justify-content: flex-start;
    padding: 2rem 0;
    background-color: #fff;
    flex-wrap: wrap;
    gap: 1rem;

    &-label {
        list-style-type: none;
        box-shadow: 0 3px 6px #00000029;
        padding: 10px 2rem;
        border-radius: 50px;
        gap: 10px;
        cursor: pointer;
        transition: background-img .2s ease-in-out;
        background-image: none;

        &:hover {
            background-image: linear-gradient(to right, rgb(255, 193, 123), rgba(255, 193, 123, 0.515));
        }
    }
}
</style>