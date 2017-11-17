<template lang="pug">

  div#app

    div.main
      main-content

    //el-row(hidden-sm-only)
    //  div#object
       //model

</template>

<script>
  import MainContent from "./front/Index.vue";
  import Model from "./back/Index.vue";

  export default {
    name: 'app',
    components: {
      Model,
      MainContent
    }
  }
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC')
  @import url('https://fonts.googleapis.com/css?family=Fjalla+One')
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans')
  @import "global"

  .font-bowlby
    font-family: 'Bowlby One SC', cursive

  #object
    z-index: -1
    position: fixed
    width: 100%
    height: 100%

  body
    margin: 0
    font-size: 62.5%
    font-family: 'Fjalla One', 'Noto Sans', sans-serif
</style>
