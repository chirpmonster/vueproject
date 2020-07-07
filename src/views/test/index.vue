<template>
    <div class="content">
        在mine的组件里面嵌套路由
        <router-link to="/mine/c">去到Cpage</router-link>
        <router-link to="/mine/d">去到Dpage</router-link>
        <div class="child">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>