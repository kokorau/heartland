<template lang="pug">
  div

    div.fr
      el-row
        el-col(:span="span", :offset="24-span")
          fr

    div.bg
      el-row
        el-col(:span="span")
          bg

</template>

<script>
  import Fr from "./Fr.vue";
  import Bg from "./Bg.vue";

  export default {
    name: 'main-content',

    data () {
      return {
        width: 0
      }
    },

    created () {
      window.addEventListener('resize', this.onResize)
    },

    methods: {
      onResize() {
        this.width = window.innerWidth
      }
    },

    computed: {
      span () {
        if (this.width < 768) { // xs
          console.log('xs');
          return 24
        } else if (768 <= this.width && this.width < 992) { // sm
          console.log('sm');
          return 24
        } else if (992 <= this.width && this.width < 1200) { // md
          console.log('md');
          return 24
        } else if (1200 <= this.width && this.width < 1920) { // lg
          console.log('lg');
          return 24
        } else if (1920 <= this.width) { // xl
          console.log('xl');
          return 24
        }
      }
    },
    components: { Fr, Bg }
  }
</script>

<style lang="sass">
  .fr
    z-index: 2
    position: absolute
    width: 100%
    height: 100%
    color: rgb(255, 0, 0)
    text-align: right
    margin-left: 15px
    margin-right: 20px

  .bg
    z-index: -10
    position: fixed
    height: 100%

    img
      height: 100%
      object-fit: cover

</style>
