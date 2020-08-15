<template>
    <div class="main">
        <img src="../../../assets/QRcode.png">
    </div>
</template>

<script>
    export default {
        name: "joinus"
    }
</script>

<style scoped>
    .main {
        position: absolute;
        display: flex;
        height: calc(100vh - 61px);
        width: 100vw;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 20%;
    }
</style>