<template>
  <div class="front">
    <fr-title></fr-title>
    <fr-member></fr-member>
    <fr-description></fr-description>
  </div>
</template>
<script>
  import FrMember from './FrMember.vue';
  import FrTitle from "./FrTitle.vue";
  import FrDescription from "./FrDescription.vue";

  export default {
    name: 'front',
    components: {
      FrDescription,
      FrTitle,
      FrMember
    }
  }
</script>
<style>

  .front {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    color: rgb(255, 0, 0);
    text-align: right;
  }

</style>
