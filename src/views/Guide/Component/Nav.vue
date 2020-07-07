<template>
    <div class="main">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">主页</el-menu-item>
            <el-menu-item index="2" disabled>更多</el-menu-item>
            <el-menu-item index="3" disabled>更多</el-menu-item>
            <el-menu-item index="4" disabled>更多</el-menu-item>
            <el-menu-item index="5" class="float-right">注册</el-menu-item>
            <el-menu-item index="6" class="float-right">登录</el-menu-item>
            <el-menu-item index="7" class="float-right">技术交流</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {

        }
    }
</script>

<style scoped>
    .main{
        transform: translateY(-52px);
        transition: all 2s ease;
    }
    .main:hover{
        transform: translateY(0);
        transition: all 1s ease;
    }
    .el-menu-item{
        width: 100px;
        text-align: center;
    }
    .float-right{
        float:right
    }

</style>