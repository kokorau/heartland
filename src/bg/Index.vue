<template lang="pug">
  div.bg(ref="bg")
    img(src="static/main.jpg")
</template>

<script>

  export default {
    name: 'bg',
    data () {
      return {
      }
    },

    mounted () {
      window.addEventListener ('resize', this.onWindowResize);
    },

    methods: {

      onWindowResize () {
        const $bg = this.$refs.bg;

        this.$store.commit('setBgSize',
          $bg.clientWidth,
          $bg.clientHeight
        );

      }

    },



  }

</script>

<style lang="sass">

  .bg
    z-index: -10
    position: fixed
    height: 100%

    img
      height: 100%

  .bg-xs
    position: fixed
    height: 100%

</style>
