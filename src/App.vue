<template lang="pug">

  div#app

    div.front
      front

    el-row(hidden-sm-only)
      div#object
       //model

    bg

</template>

<script>
  import Front from "./front/Index.vue";
  import Model from "./back/Index.vue";
  import Bg from "./bg/Index.vue";

  export default {
    name: 'app',
    components: {
      Bg,
      Model,
      Front
    }
  }
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC')
  @import "global"

  .container
    margin-right: 15px
    margin-left: 15px

  #app
    font-family: 'Bowlby One SC', cursive
    font-size: 20px

  #object
    z-index: -1
    position: fixed
    width: 100%
    height: 100%

  body
    margin: 0

</style>
