<template>
    <div>
      <h1>checkbox</h1>

      <el-row :gutter="10">
        <el-checkbox v-model="checkbox" disabled>
          checkbox
        </el-checkbox>
      </el-row>

      <el-row>
        <el-checkbox-group v-model="checkboxButton">
          <el-checkbox label="A">A</el-checkbox>
          <el-checkbox label="B">B</el-checkbox>
          <el-checkbox label="C">C</el-checkbox>
        </el-checkbox-group>
      </el-row>


      <el-row>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>

        <el-checkbox-group v-model="checkBoxCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-row>

      <el-row>
       <el-checkbox-group v-model="checkBoxCities1" v-bind:max="max">
         <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
       </el-checkbox-group>
      </el-row>

      <el-row>
        <el-checkbox-group v-model="checkboxButtonList" v-bind:max="max">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </el-row>
    </div>
</template>
<script>
  let cities = ['上海', '深圳', '北京', '广州'];
  let choose = ['上海', '深圳'];
  export default {
    name: 'checkbox',
    data () {
      return {
        checkbox: true,
        checkboxButton: ['A', 'B'],
        isIndeterminate: true,
        checkAll: false,
        checkBoxCities: choose,
        checkBoxCities1: choose,
        cities: cities,
        max: parseInt(this.$route.query.max),
        checkboxButtonList: choose
      }
    },
    methods: {
      handleCheckAllChange (val) {
        this.checkBoxCities = val ? cities : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange (val) {
        let checkedCount = val.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  }
</script>

<style scoped>
  .el-row{
    padding-bottom: 10px;
  }
</style>
