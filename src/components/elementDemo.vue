<template>
    <div>
      <h1>elementDemo</h1>
      <router-link to="/elementDemo/button/按钮/红色"><el-button v-bind:type="type[0]" v-bind:size="size[0]">button</el-button></router-link>
      <router-link to="/elementDemo/layout"><el-button v-bind:type="type[1]" v-bind:size="size[1]">layout</el-button></router-link>
      <router-link to="/elementDemo/container"><el-button v-bind:type="type[0]" v-bind:size="size[0]">container</el-button></router-link>
      <router-link to="/elementDemo/icon"><el-button v-bind:type="type[0]" v-bind:size="size[2]">icon</el-button></router-link>
      <router-link to="/elementDemo/elementButton"><el-button v-bind:type="type[2]" v-bind:size="size[0]">elementButton</el-button></router-link>
      <router-link to="/elementDemo/radio"><el-button v-bind:type="type[3]" v-bind:size="size[0]">radio</el-button></router-link>
      <router-link to="/elementDemo/checkbox?max=2"><el-button v-bind:type="type[2]" v-bind:size="size[0]">checkbox</el-button></router-link>
      <router-link to="/elementDemo/input?max=2"><el-button v-bind:type="type[2]" v-bind:size="size[0]">input</el-button></router-link>
      <router-link to="/elementDemo/inputNumber?max=2"><el-button v-bind:type="type[1]" v-bind:size="size[2]">inputNumber</el-button></router-link>
      <router-link to="/elementDemo/select?max=2"><el-button v-bind:type="type[1]" v-bind:size="size[2]">select</el-button></router-link>
      <router-link to="/elementDemo/tabs"><el-button v-bind:type="type[1]" v-bind:size="size[2]">tabs</el-button></router-link>
      <router-view/>
    </div>
</template>

<script>
  export default {
    name: 'elementDemo',
    data () {
      return {
        type: ['info', 'primary', 'success', 'warning'],
        size: ['medium', 'small', 'mini']
      }
    }
  }
</script>

<style scoped>
a{
  padding-right: 5px;
}
</style>
