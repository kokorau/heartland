<template>
  <!-- Wrapper -->
  <div id="wrapper" class="container">

    <div class="row">
      <div class="col">
        <fr-title></fr-title>
      </div>
    </div>

    <!-- Main -->
    <div id="main" class="row">
      <member class="col-12"></member>
    </div>

  </div>
</template>

<script>
  import Member from './front/member/Member.vue';
  import Title from './front/Title.vue';

  export default {
    name: 'front-contents',
    data () {
      return {}
    },
    props: [],
    components: {
      'member': Member,
      'fr-title': Title
    }
  }
</script>

<style scoped>
  #wrapper {
    width: 100%;
    height: 100%;
  }
</style>
