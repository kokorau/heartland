<template lang="pug">
  div.font-bowlby
    h3.section-title INFOMATION

    el-card.description
      p
        label LOCATION:
        a(target="_blank",
          href="https://www.google.co.jp/maps/place/OATH/@35.6582777,139.7092371,19z/data=!4m5!3m4!1s0x60188b5e7f0c8ba1:0xc268e385918a1532!8m2!3d35.6586473!4d139.7091919")
          |AOYAMA OATH
      p
        label DATE:
        |2017/12/17 18:00-24:00

</template>

<script>
  export default {
    name: 'fr-description'
  }
</script>

<style lang="sass" scoped>
  a
    text-decoration: none
    color: #fff

    &:hover
      opacity: 0.7

  .el-card
    background-color: rgba(0, 0, 0, 0.4)
    color: #fff
    font-size: 1.3vh
    border: none
    border-radius: 3px
    margin-bottom: 1.5px

    p
      font-size: 200%

  .el-card__body
    background-color: red
</style>
