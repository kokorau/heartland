<template lang="pug">
  member(
    twitterLink="https://twitter.com/0_drink",
    soundcloudLink="https://soundcloud.com/1-drink",
    imgSrc="static/1drink.jpg",
    :objY="33"
  )
    h3.name(slot="name") 1-drink

    div(slot="description")
      p Technoを軸に様々なダンスミュージックの境界を彷徨いながら現在にいたる。
      p ときどき街の片隅をにぎわせている。
</template>

<script>
  import Twitter from "../../assets/Twitter.vue";
  import Member from "./Member.vue";

  export default {
    name: 'one-drink',
    components: {
      Member,
      Twitter
    }
  }
</script>

<style lang="sass">
  .name
    padding: 0
</style>
