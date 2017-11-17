<template lang="pug">

  a.twitter(:href="link", target="_blank")
    icon.twitter-icon(name="twitter", scale="1.1")

</template>

<script>
  export default {
    name: 'twitter',
    props: [ 'link' ]
  }
</script>

<style lang="sass">
  .twitter-icon
    color: #c5c5c5

  .twitter
    &:hover
      .twitter-icon
        color: rgb(0, 172, 237)
</style>
