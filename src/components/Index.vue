<template>
  <div id="app">
    <back-object></back-object>
  </div>
</template>

<script>
  import FrontContents from './FrontContents.vue';
  import BackObject from './BackObject.vue';

  export default {
    name: 'index',
    components: {
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
