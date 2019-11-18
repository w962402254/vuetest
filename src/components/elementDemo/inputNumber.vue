<template>
  <div>
    <h1>InputNumber</h1>
    <el-row>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="100" :precision="1" label="描述文字" @focus="focus" @blur="blur"></el-input-number>
    </el-row>
    <el-row>
      <el-input-number v-model="num" @change="handleChange" :step="0.1" :min="1" :max="2" :precision="2" label="描述文字" size="medium"></el-input-number>
      <el-input-number v-model="num" @change="handleChange" :step="0.1" :min="1" :max="2" :precision="2" label="描述文字" size="small"></el-input-number>
      <el-input-number v-model="num" @change="handleChange" :step="0.1" :min="1" :max="2" :precision="2" label="描述文字" size="mini"></el-input-number>
    </el-row>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        num: 1
      }
    },
    methods: {
      handleChange (value) {
        console.log(value)
      },
      focus () {
      	console.log('得到焦点');
      },
      blur () {
        console.log('失去焦点');
      }
    }
  }
</script>

<style scoped>

</style>
