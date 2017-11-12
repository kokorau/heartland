<template>
  <div id="app">

    <div id="wrapper">
      <front-contents></front-contents>
    </div>

    <div id="bg">
      <back-object></back-object>
    </div>

  </div>
</template>

<script>
  import FrontContents from './FrontContents.vue';
  import BackObject from './BackObject.vue';

  export default {
    name: 'index',
    components: {
      'front-contents': FrontContents,
      'back-object': BackObject
    }
  }
</script>

<style>
  #wrapper {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #bg {
    z-index: 1;
    position: static;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
