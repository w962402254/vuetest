<template>
    <div>
      <h1>elementButton</h1>

      <el-row>
        <el-button circle icon="el-icon-search"></el-button>
        <el-button circle type="primary">默认按钮</el-button>
        <el-button circle type="success">默认按钮</el-button>
        <el-button circle type="info">默认按钮</el-button>
        <el-button circle type="warning">默认按钮</el-button>
        <el-button circle type="danger">默认按钮</el-button>
      </el-row>

      <el-row>
        <el-button type="text">textButton</el-button>
        <el-button type="text" disabled>textButton</el-button>
      </el-row>

      <el-row>
        <el-button round icon="el-icon-success" plain>确定</el-button>
      </el-row>

      <el-row>
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left" size="mini">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </el-row>

      <el-row>
        <el-button-group>
          <el-button id="load" type="primary" icon="el-icon-edit" :loading="true"></el-button>
          <el-button @click="goLoading" type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'elementButton',
  methods: {
    goLoading () {
      this.axios({
        method: 'get',
        url: '/ssm/student/testWebpack/20'
      }).then(response => {
        alert(response.data.age)
      }).catch(err => {
        alert('服务器出错')
      })
    }
  }
}
</script>

<style scoped>
.el-row{
  padding: 10px;
}
</style>
