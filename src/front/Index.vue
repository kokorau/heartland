<template lang="pug">
  div

    div.fr#fr(ref="fr")
      el-row
        el-col(:span="24")
          fr-title

      el-row
        el-col(:span="span", :offset="24-span")
          fr-member

      el-row
        el-col(:span="span", :offset="24-span")
          fr-description

    div.bg(ref="bg")
      el-row
        el-col(:span="span")
          bg

</template>

<script>
  import Bg from "./Bg.vue";
  import FrTitle from "./FrTitle.vue";
  import FrMember from "./FrMember.vue";
  import FrDescription from "./FrDescription.vue";

  export default {
    name: 'main-content',

    data () {
      return {
        scrollHeight: 0,
        frWidth: 0
      }
    },

    mounted () {
      window.addEventListener ('resize', this.onWindowResize);
      this.onWindowResize()
    },

    methods: {

      onWindowResize () {
        this.frWidth = this.$refs.fr.offsetWidth;
      },

    },

    computed: {

      scrollY: () => window.pageYOffset,

      bgWidth: () => window.innerWidth,

      span () {
        if (this.frWidth < 768) { // xs
          console.log('xs');
          return 24
        } else if (768 <= this.frWidth && this.frWidth < 992) { // sm
          console.log('sm');
          return 20
        } else if (992 <= this.frWidth && this.frWidth < 1200) { // md
          console.log('md');
          return 14
        } else if (1200 <= this.frWidth && this.frWidth < 1920) { // lg
          console.log('lg');
          return 12
        } else if (1920 <= this.frWidth) { // xl
          console.log('xl');
          return 12
        }
      }

    },
    components: {
      FrDescription,
      FrMember,
      FrTitle,
      Bg }
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

  .section-title
    font-size: 400%
    margin: 0

</style>
