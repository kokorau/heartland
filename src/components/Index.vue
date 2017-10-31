<template>
  <div id="app">
    <div class="z-2">
      <front-contents></front-contents>
    </div>
    <div class="z-1">
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
      FrontContents,
      BackObject,
      'front-contents': FrontContents,
      'back-object': BackObject
    }
  }
</script>

<style scoped>
  .z-1 {
    z-index: 1;
    position: absolute;
  }

  .z-2 {
    z-index: 2;
    position: absolute;
  }
</style>
