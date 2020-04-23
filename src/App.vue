<template>
  <div id="app">
     <h1>首页</h1>
    <router-link to="/">Go to HelloWorld</router-link>&nbsp;
    <router-link to="/user?age=27">Go to User</router-link>&nbsp;
    <router-link to="/goUser?age=100">别名</router-link>
    <router-link to="/goBack">重定向</router-link>
    <router-link to="/dfsafd">跳转404</router-link>
    <router-link to="/elementDemo/button/button1/red">Go to Button</router-link>
    <button @click="jump">跳转user页面</button>

    <router-link to="/elementDemo">Go to elementDemo</router-link>
    <router-view/>
  </div>
</template>

<script>
const name = 'wzq'
const age = 26
export default {
  name: 'App',
  methods: {
    jump () {
      this.$router.push({
        path: '/user',
        query: { age: age }
      })
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
