<!-- 遊びでpugとsass使ってみた。 -->

<template lang="pug">

  div.title.font-bowlby

    div.title-content(ref="text")

      p HEARTLAND
      p 2017/12/17
      p AOYAMA OATH

</template>

<script>
  export default {
    name: 'fr-title',

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
        this.width = window.innerWidth;
      }
    },

    mounted() {
      // 文字の大きさの設定
        for(const row of this.$refs.text.children) {
          row.style.fontSize = `${100 / row.textContent.length}vw`
        }
    }
  }
</script>

<style lang="sass">
  .title
    text-align: right
    letter-spacing: -3px
    display: table
    width: 100%
    height: 88vh

    p, h1
      margin-top: -20px
      margin-bottom: -20px


  .title-content
    display: table-cell
    vertical-align: middle

</style>
