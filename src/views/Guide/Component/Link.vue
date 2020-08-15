<template>
    <div class="main">
        <a href='/index'>炉石-web</a>
        <br>
        <br>
        <a href='/photo'>COMIC</a>
        <br>
        <br>
        <a disabled style="cursor: not-allowed">小游戏（demo）</a>
    </div>
</template>

<script>
    export default {
        name: "Link",
    }
</script>

<style scoped>
    .main {
        position: absolute;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: #2aabd2;
    }

    a:hover {
        text-decoration: none;
    }

    a {
        width: 100%;
        height: 100px;
        font-size: 30px;
        text-shadow: black 1px 1px;
    }
</style>