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
        display: flex;
        width: 50%;
        height: calc(100vh - 61px);
        justify-content: center;
        align-items: center;
    }
    img{
        width: 60%;
    }
</style>