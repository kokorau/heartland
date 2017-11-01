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
      FrontContents,
      BackObject,
      'front-contents': FrontContents,
      'back-object': BackObject
    }
  }
</script>

<style>

</style>
