<template>
    <div class="main">
        <!--        <GuideNav/>-->
        <div :class="NavMain">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                <router-link to="/">
                    <el-menu-item index="1">主页</el-menu-item>
                </router-link>
                <router-link to="/photo">
                    <el-menu-item index="2">漫画</el-menu-item>
                </router-link>
                <router-link to="/guide/note">
                    <el-menu-item index="3" disabled>更多</el-menu-item>
                </router-link>
                <router-link to="/guide/note">
                    <el-menu-item index="4" disabled>更多</el-menu-item>
                </router-link>
                <router-link to="/guide/register">
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
        <!--        <GuideLink/>-->
        <router-view/>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    // import GuideNav from './Component/Nav.vue'
    // import GuideLink from './Component/Link.vue'
    export default {
        name: "index",
        data() {
            return {
                // activeIndex: '1',
                NavMain: ''
            }
        },
        computed: {
            ...mapState(['GuideNum']),
            activeIndex() {
                if (this.$route.path === '/')
                    return '1';
                else if (this.$route.path === '/photo/' || this.$route.path === '/photo')
                    return '2';
                else {
                    return '0'
                }
            }
        },
        created() {
            let that = this;
            setTimeout(() => {
                that.NavMain = 'NavMain' //两秒后动画
            }, 10000)
        },

        methods: {
            ...mapMutations(['changeGuide']),
        },
        // components: {GuideLink}
    }
</script>
<style scoped>
    /*媒体查询*/
    @media screen and (max-width: 700px) {
        .el-menu {
            display: none;
        }
    }

    .is-active {
        color: #409EFF !important;
    }

    /*去除Nav的下划线*/
    li {
        text-decoration: none;
        display: inline-block;
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