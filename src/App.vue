<template>
  <div id="app">
    <img src="./assets/logo.png">
    <index></index>
  </div>
</template>

<script>
  import Index from '@/components/Index.vue'

  export default {
    name: 'app',
    components: {
      'index': Index
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
