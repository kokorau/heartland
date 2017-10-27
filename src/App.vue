<template>
  <div id="app">
    <img src="./assets/logo.png">
    <sample></sample>
  </div>
</template>

<script>
  import Sample2 from '@/components/sample2/Sample2.vue'

  export default {
    name: 'app',
    components: {
      'sample': Sample2
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
