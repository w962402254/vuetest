<template>
  <div style="display: flex;flex-direction: row;justify-content: center;width: 100%;">
    <el-form ref="registerForm" :model="registerForm" label-width="80px" label-suffix=":" label-position="left" style="width: 300px" :rules="rules">
      <el-form-item label="帐号" prop="username">
        <el-input v-model="registerForm.username" clearable autocomplete="new-username" hide-required-asterisk="true"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerForm.password" type="password" clearable autocomplete="new-password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repeatPassword">
        <el-input v-model="registerForm.repeatPassword" type="password" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button round icon="el-icon-success" type="primary" @click="submitForm('registerForm')">提交</el-button>
        <el-button round icon="el-icon-success" @click="resetForm('registerForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {

  name: 'register',

  data () {
    let checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('帐号不可为空！'))
      } else if (value.length > 12 || value.length < 6) {
        return callback(new Error('帐号长度 6 到 12 个字符'))
      } else {
        this.axios.post('/ssm/user/validateUsername', {
          username: value
        }).then(res => {
          if (!res.data.success) {
            return callback(new Error('帐号已存在'))
          }
        })
      }
      return callback()
    }

    let checkRepeatPassword = (rule, value, callback) => {
      if (this.registerForm.password !== value) {
        return callback(new Error('密码不一致，请确认！'))
      }
      return callback()
    }

    let checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不可为空！'))
      } else if (value.length > 12 || value.length < 6) {
        return callback(new Error('密码长度 6 到 12 个字符'))
      } else if (!/^[A-za-z0-9]*$/.test(value)) {
        return callback(new Error('必须有大小写字符和数字组合'))
      }
      return callback()
    }
    return {
      registerForm: {
        username: '1234567',
        password: '123456',
        repeatPassword: '123456'
      },
      rules: {
        username: [{ validator: checkUsername, trigger: 'blur' }],
        repeatPassword: [{ validator: checkRepeatPassword, trigger: 'blur'}],
        password: [{ validator: checkPassword, trigger: 'blur'}]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((v, bf) => {
        if (v) {
          this.$message({
            message: '注册成功！即将调整至登录界面'
          })
          let $this = this
          setTimeout(function () {
            $this.$router.push({
              path: '/'
            })
          }, 1000)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      // document.getElementsByTagName('form').resetFields();
      this.$refs[formName].resetFields()
    }
  }
}

</script>
<style lang="css" scoped>
</style>
