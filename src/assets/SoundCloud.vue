<template lang="pug">
  a.soundcloud(:href="link", target="_blank")
    icon.soundcloud-icon(name="soundcloud", scale="1.3")
</template>

<script>
  export default {
    name: 'soundcloud',
    props: ['link']
  }
</script>

<style lang="sass">
  .soundcloud-icon
    color: gray

  .soundcloud
    &:hover
      .soundcloud-icon
        color: #ff7700

</style>
