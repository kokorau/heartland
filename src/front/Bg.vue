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
        windowHeight: 0,
      }
    },

    computed: {
      perY() {
        return this.scrollY / this.windowHeight
      }
    },

    props: {}
  }

</script>

<style lang="sass">

</style>
