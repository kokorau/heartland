<template>
  <div class="container">

    <fr-title class="content"></fr-title>

    <fr-member class="content"></fr-member>

    <fr-description class="content"></fr-description>

    <fr-info class="content"></fr-info>

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
  .content {
    text-align: right;
  }
  .container {
    margin-left: auto;
    margin-right: auto;
  }
</style>
