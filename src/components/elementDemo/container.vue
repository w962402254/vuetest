<template>
    <div>
      <h1>container</h1>

      <el-container>
        <el-header height="50px">111</el-header>

        <el-container>
          <el-aside width="200px">menu</el-aside>
          <el-container>
            <el-header>导航栏</el-header>
            <el-main>主页</el-main>
          </el-container>
        </el-container>
        <el-footer>footer</el-footer>
      </el-container>
    </div>
</template>

<script>
export default {
  name: 'container'
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
