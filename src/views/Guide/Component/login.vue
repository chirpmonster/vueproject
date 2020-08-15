<template>
    <div class="main">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            var checkEmail = (rule, value, callback) => {
                let emailTest=/^[0-9a-zA-Z]+[@][0-9a-zA-Z]+([.][a-zA-Z]+)+$/;
                if (!value) {
                    return callback(new Error('请输入邮箱'));
                }
                setTimeout(() => {
                    if (!emailTest.test(value)) {
                        callback(new Error('请输入正确的邮箱'));
                    } else {
                        callback();
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else if(value.length<6){
                    callback(new Error('密码太短了'));
                }else{
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    email: ''
                },
                rules: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    email: [
                        {validator: checkEmail, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.ajax(this.ruleForm.email,this.ruleForm.pass)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            ajax(email,pass){
                axios.get('http://yingyingguai.club:3000')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                alert(`账号${email}密码${pass}post请求正在做`)
            }
        }
    }
</script>
<style>

</style>
<style scoped>
    .main {
        position:absolute;
        display: flex;
        height: calc(100vh - 61px);
        width: 100vw;
        justify-content: center;
        align-items: center;
    }
</style>
