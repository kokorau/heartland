<template>
  <div class="container">

    <fr-title></fr-title>

    <fr-member></fr-member>

    <!--<fr-description></fr-description>-->

    <!--<fr-info></fr-info>-->

  </div>
</template>
<script>
  import FrMember from './FrMember.vue';
  import FrTitle from "./FrTitle.vue";
  import FrDescription from "./FrDescription.vue";
  import FrInfo from "./Info.vue";

  export default {
    name: 'front',
    components: {
      FrInfo,
      FrDescription,
      FrTitle,
      FrMember
    }
  }
</script>
<style>
  .container {
    padding-left: 60px;
    padding-right: 60px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
  }
</style>
