<template>
  <div id="app">

    <div id="front">
      <front></front>
    </div>

    <div id="back">
      <bg></bg>
    </div>

  </div>
</template>

<script>
import Front from "./front/Index.vue";
import Bg from "./back/Index.vue";

export default {
  name: 'app',
  components: {
    Bg,
    Front
  }
}
</script>

<style>
  #front {
    z-index: 2;
    position: absolute;
  }
  #back {
    z-index: 1;
    position: fixed;
  }
  body {
    margin: 0;
  }
</style>
