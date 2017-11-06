<template>
  <!-- Wrapper -->
  <div id="wrapper" class="container">

    <!-- Main -->
    <div id="main" class="row">
      <member class="col-12"></member>
    </div>

  </div>
</template>

<script>
  import Member from './front/member/Member.vue'

  export default {
    name: 'front-contents',
    data () {
      return {}
    },
    props: [],
    components: {
      'member': Member
    }
  }
</script>

<style scoped>
  #wrapper {
    width: 100%;
    height: 100%;
  }
</style>
