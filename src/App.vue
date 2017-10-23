<template>
  <div id="app">
    <img src="./assets/logo.png">
    <sample></sample>
  </div>
</template>

<script>
  import Sample from '@/components/sample/Sample.vue'

  export default {
    name: 'app',
    components: {
      'sample': Sample
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
