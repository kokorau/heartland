<template>
  <div id="app">

    <div id="front">
      <front></front>
    </div>

    <div id="object">
      <!--<model></model>-->
    </div>

    <!--<div id="bg">-->
    <!--<img src="static/main.jpg">-->
    <!--</div>-->
    <bg></bg>

  </div>
</template>

<script>
  import Front from "./front/Index.vue";
  import Model from "./back/Index.vue";
  import Bg from "./bg/Index.vue";

  export default {
    name: 'app',
    components: {
      Bg,
      Model,
      Front
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC');
  @import "global";

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

  body {
    margin: 0;
  }
</style>
