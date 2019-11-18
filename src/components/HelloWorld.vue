<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/a/aaaaa">a</router-link>
    <router-link to="/b/bbbbb">b</router-link>
    <router-link to="/c/ccccc">c</router-link>
    <transition name="el-zoom-in-center">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #832F2F;
}
</style>
