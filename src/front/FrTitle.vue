<!-- 遊びでpugとsass使ってみた。 -->

<template lang="pug">

  div.title

    div.title-content

      p HEARTLAND
      p 2017/12/17
      p AOYAMA OATH

</template>

<script>
  export default {
    name: 'fr-title',
  }
</script>

<style lang="sass">
  .title
    font-size: 160px
    text-align: right
    letter-spacing: -3px
    display: table
    width: 100%
    height: 88vh

    p
      margin-top: -20px
      margin-bottom: -20px


  .title-content
    display: table-cell
    vertical-align: middle

</style>
