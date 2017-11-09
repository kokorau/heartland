<template>
  <div class="container">

    <fr-title></fr-title>

    <fr-member></fr-member>

    <fr-description></fr-description>

    <fr-info></fr-info>
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
  }
  .card {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-right: 0;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom:8px
  }
  .card-title {
    color: #000;
    font-size: 28px;
    margin: 0;
  }
  .card-text {
    color: #000;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
  }
  .card-img {
    border-radius: 5px 5px 0 0;
    max-width: 100%;
    height: auto;
  }
</style>
