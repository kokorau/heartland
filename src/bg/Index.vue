<template lang="pug">
  div.bg(ref="bg")
    img(src="static/main.jpg")
    p {{perY}}
</template>

<script>

  export default {
    name: 'bg',
    data () {
      return {
        scrollY: 0,
        windowHeight: document.documentElement.clientHeight,
      }
    },

    mounted () {
      window.addEventListener ('resize', this.onWindowResize);
      window.addEventListener('scroll', this.onScroll)
    },

    methods: {

      onWindowResize () {
        const width = window.innerWidth;
        const height = window.innerHeight;
      },

      onScroll () {
        this.scrollY = window.pageYOffset;
      }
    },

    computed: {
      perY() {
        return this.scrollY / this.windowHeight
      }
    }

  }

</script>

<style lang="sass">

  .bg
    z-index: -10
    position: fixed
    height: 100%

    img
      height: 100%
      object-fit: cover

  .bg-xs
    position: fixed
    height: 100%

</style>
