<template>
    <div class="main">
        <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="username">
                <el-input type="text"  autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .el-form-item__label{
        color: white;
    }
</style>
<style scoped>
    .main {
        display: flex;
        width: 50%;
        height: calc(100vh - 61px);
        justify-content: center;
        align-items: center;
    }
</style>