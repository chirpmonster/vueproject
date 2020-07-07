<template>
    <div class="main">
        <a href='/index'>炉石传说网页版（目前完成开包界面）</a>
        <a href='/h'>漫画阅读器</a>
        <a href='/running'>奔跑吧奥尔加（未完成）</a>
    </div>
</template>

<script>
    export default {
        name: "Link"
    }
</script>

<style scoped>
    .main {
        display: inline-block;
        float: left;
        width: 50%;
        height: calc(100vh - 61px);
        padding: 40px 0 -40px 0;
    }

    a {
        text-decoration: none;
        color: #2aabd2;
    }

    a:hover {
        text-decoration: none;
    }

    a {
        display: flex;
        width: 100%;
        height: 100px;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        text-shadow: black 1px 1px;
    }
</style>