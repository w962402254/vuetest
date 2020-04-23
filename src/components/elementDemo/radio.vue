<template>
    <div>
      <h1>radio</h1>

      <el-row>
        <el-radio-group v-model="radio1">
          <el-radio label="1">A</el-radio>
          <el-radio label="2">B</el-radio>
        </el-radio-group>
      </el-row>

      <el-row>
        <el-radio-group v-model="radio2">
          <el-radio label="3">备选项</el-radio>
          <el-radio label="6">备选项</el-radio>
          <el-radio label="9">备选项</el-radio>
        </el-radio-group>
      </el-row>

      <el-row>
        <el-radio-group v-model="radio3">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'radio',
  data () {
    return {
      radio1: '1',
      radio2: '3',
      radio3: '深圳'
    }
  }
}
</script>

<style scoped>

</style>
