<template lang="pug">
  div.bg
    img(src="static/main.jpg")
</template>

<script>

  export default {
    name: 'bg',
    data () {
      return {}
    },
    props: [],
    components: {}
  }
</script>

<style lang="sass">
  .bg
    z-index: -10
    position: fixed
    height: 100%

    img
      height: 100%
</style>
