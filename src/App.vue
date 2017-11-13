<template>
  <div id="app">

    <div id="front">
      <front></front>
    </div>

    <div id="object">
      <!--<model></model>-->
    </div>

    <div id="bg">
      <img src="static/main.jpg">
    </div>

  </div>
</template>

<script>
import Front from "./front/Index.vue";
import Model from "./back/Index.vue";

export default {
  name: 'app',
  components: {
    Model,
    Front
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC');
  .container {
    margin-right: 15px;
    margin-left: 15px;
  }

  #app {
    font-family: 'Bowlby One SC', cursive;
    font-size: 20px;
  }
  #object {
    z-index: -1;
    position: fixed;
    width: 100%;
    height: 100%;
  }
  #bg {
    z-index: -10;
    position: fixed;
    height: 100%;
    width: 100%;
  }
  #bg img {
    height: 100%
  }
  body {
    margin: 0;
  }
</style>
