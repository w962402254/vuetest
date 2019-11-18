<template>
  <div>
    <h1>{{$route.params.name}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'helloB',
    beforeRouteEnter: ((to, from, next) => {
      console.log('ready for go to model')
      next()
    }),
    beforeRouteLeave: ((to, from, next) => {
      console.log('ready for leave from model')
      next()
    }),
  }
</script>

<style scoped>

</style>
