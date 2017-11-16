<template lang="pug">
  member(
    name="KAG"
    twitterLink="https://twitter.com/shi10hiwa3"
    imgSrc="static/kag.jpg")
    div(slot="description")
      p おっぱい大好き
</template>

<script>
  import Twitter from "../../assets/Twitter.vue";
  import Member from "./Member.vue";

  export default {
    name: 'kag',
    components: {
      Member,
      Twitter
    }
  }
</script>

<style>

</style>
