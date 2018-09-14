<template>
  <div class="login-page">
    <el-row class="input-wrapper">
      <el-col :span="10" type="fiex">
        <div class="login-logo">
          <img src="../../assets/logo.png" alt="">
          <div class="title">
            <a href="javascript:;">
              <span>VUE</span>
              <span>EDEN</span>
            </a>
          </div>
        </div>
        <div class="login-form">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules2"
            size="40px"
            ref="ruleForm"
          >
            <el-form-item prop="user">
              <el-input type="text" v-model="ruleForm.user" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 100%" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="login-footer">
          <el-checkbox v-model="checkedPass">记住密码</el-checkbox>
        </div>
      </el-col>
      <el-col :span="14" type="fiex">

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'logIn',
  data () {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        user: 'admin',
        pass: ''
      },
      rules2: {
        user: [
          {
            validator: validateUser,
            trigger: 'blur'
          }
        ],
        pass: [
          {
            validator: validatePass,
            trigger: 'blur'
          }
        ]
      },
      checkedPass: true
    }
  },
  methods: {
    submitForm (ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (!valid) {
          this.$message.error('验证没通过，请检查哪里错误')
        } else {
          this.$router.push({
            path: '/success',
            params: {
              name: 123,
              age: 456
            }
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-page {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    background: #eee;
    align-items: center;
    justify-content: center;
  }
  .input-wrapper {
    width: 900px;
    height: 400px;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    border-radius: 4px;
  }
  .login-logo {
    padding-top: 26px;
    text-align: center;
  }
  .login-logo img {
    width: 73px;
    height: 73px;
  }
  .login-logo .title {
    padding-top: 8px;
    font-size: 22px;
    font-weight: 700;
  }
  .title a span:first-child {
    color: #41b883;
  }
  .title a span:last-child {
    color: #2e5273
  }
  .login-form {
    padding: 30px 30px 0;
  }
  .login-footer {
    text-align: center;
  }
</style>
