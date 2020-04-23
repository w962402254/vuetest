<template>
  <div>
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>

    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" closable :tab-position="tabPosition">
      <el-tab-pane name="first"><span slot="label"><i class="el-icon-date"></i>select</span>
        <selectComponent/>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <iframe src="http://www.baidu.com" width="100%" height="800px" border="none"></iframe>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
import Select from '@/components/elementDemo/select'

export default {
  name: 'tabs',
  data () {
    return {
      activeName: 'second',
      tabPosition: 'top'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    selectComponent: Select
  }
}
</script>

<style lang="css" scoped>

</style>
