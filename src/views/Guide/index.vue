<template>
    <div>
        <canvas id="triangle-lost-in-space" resize="true"></canvas>
        <div class="background"></div>
        <!--        <GuideNav/>-->
        <div :class="NavMain">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <router-link to="/guide/note">
                    <el-menu-item index="1">主页</el-menu-item>
                </router-link>
                <router-link to="/guide/note">
                    <el-menu-item index="2" disabled>更多</el-menu-item>
                </router-link>
                <router-link to="/guide/note">
                    <el-menu-item index="3" disabled>更多</el-menu-item>
                </router-link>
                <router-link to="/guide/note">
                    <el-menu-item index="4" disabled>更多</el-menu-item>
                </router-link>
                <router-link to="/guide/login">
                    <el-menu-item index="5" class="float-right">注册</el-menu-item>
                </router-link>
                <router-link to="/guide/login">
                    <el-menu-item index="6" class="float-right">登录</el-menu-item>
                </router-link>
                <router-link to="/guide/joinus">
                    <el-menu-item index="7" class="float-right">技术交流</el-menu-item>
                </router-link>
            </el-menu>
        </div>
        <GuideLink/>
        <router-view/>
    </div>
</template>

<script>

    // import GuideNav from './Component/Nav.vue'
    import GuideLink from './Component/Link.vue'

    export default {
        name: "index",
        data() {
            return {
                activeIndex: '1',
                NavMain:''
            };
        },
        mounted() {
            let that=this;
            setTimeout(()=>{
                that.NavMain='NavMain'
            },2000)
        },
        methods: {},
        components: {GuideLink}
    }
</script>
<style scoped>
    .background{
        background: url("../../assets/background.jpg") no-repeat;
        background-size: 100%;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -99;
    }
    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    /*去除Nav的下划线*/
    li {
        text-decoration: none;
        display: inline-block;
    }

    canvas {
        width: 100%!important;
        height: 100%!important;
        position: absolute;
        z-index: -1;
    }

    .NavMain {
        opacity: 0.9;
        transform: translateY(-52px);
        transition: all 2s ease;
    }

    .NavMain:hover {
        transform: translateY(0);
        transition: all 1s ease;
    }

    .el-menu-item {
        width: 100px;
        text-align: center;
    }

    .float-right {
        float: right
    }
</style>