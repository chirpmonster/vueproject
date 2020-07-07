<template>
    <div class="main">
        <div class="note-content">
            <div>近期计划:
                <br>
                1.Vue-cli重构 完成
                <br>
                2.注册&登录
                <br>
                3.完善便签
                <br>
                4.优化路由
                <br>
                5.重构炉石网页版开包界面
                <br>
                6.漫画阅读器界面优化
                <br>
                7.完善二级域名
                <br>
                8.炉石卡牌库功能完善
                <br>
                9.更多
            </div>
            <div>
                这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签这是便签
            </div>
            <div>当前仅为便签样例，尚未连接数据库</div>
        </div>
        <div style="margin: 20px 0;"></div>
        <el-input type="textarea"
                  placeholder="你有什么想说的吗？"
                  v-model="textarea"
                  maxlength="300"
                  show-word-limit
                  :autosize="{ minRows: 5, maxRows: 5}"
        >
        </el-input>
        <el-button type="success" class="submit" size="small" icon="el-icon-s-comment" round></el-button>
    </div>
</template>

<script>
    export default {
        name: "Note",
        data() {
            return {
                text: '',
                textarea: ''
            }
        }
    }
</script>
<style>
    .el-textarea{
        width:80%;
        margin-left: 75px;
    }
</style>
<style scoped>
    .main {
        display: inline-block;
        width: 50%;
        height: calc(100vh - 61px);
        opacity: 0.8;
    }
    .note-content div {
        width: 600px;
        font-size: 15px;
        border-radius: 8px;
        margin: 20px auto;
        background-color: pink;
        word-break: break-all;
        word-wrap: break-word;
        box-shadow: black 5px 5px 10px;
    }
    .note-content div {
        padding: 10px 20px;
    }
    .submit{
        margin-left: 630px;
        margin-top: 10px;
        font-size: 20px;
    }
</style>