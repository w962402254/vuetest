<template>
  <div id="login" style="display: flex;flex-direction: row;justify-content: center;width: 100%;">
    <el-form ref="form" :model="loginForm" label-width="80px" label-position="left" style="width: 300px">
      <el-form-item label="帐号">
        <el-input v-model="loginForm.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password" type="password" clearable></el-input>
      </el-form-item>
      <el-button round icon="el-icon-success" type="primary" @click="login">登录</el-button>
      <el-button round icon="el-icon-success" plain @click="getPosts">测试</el-button>
      <el-button round icon="el-icon-success" type="primary" @click="goRegister">注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {

  name: 'login',
  data() {
    return {
      loginForm: {
        username: 'wzq',
        password: '123456'
      }
    }
  },
  methods: {
    login() {

      this.axios.post('/ssm/validateUser', {
        params: {
          username: this.loginForm.username,
          password: this.loginForm.password
        }
      })
        .then(res => {
          if(res.data.success){
            this.$router.push({
              path: '/elementDemo/elementButton'
            })
            return;
          }
          this.$message({
            message: res.data.msg,
            type: 'warning'
          });

        })
        .catch(err => {
          this.$message({
            message: '服务器出错!',
            type: 'warning'
          });
        })
    },
    getPosts() {
      this.axios.get('/ssm/getPosts').then(res => {
        console.log(res)
      })
    },
    goRegister() {
    	this.$router.push({
        path: '/register'
      });
    }
  },
  computed: {
    now: function () {
      return Date.now()
    }
  }

}

</script>


<style lang="css" scoped>
</style>
