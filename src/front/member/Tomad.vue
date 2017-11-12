<template>
  <member
    name="Tomad"
    description="description"
    twitterLink="https://twitter.com/tomad"
    imgSrc="static/tomad.jpg"
  ></member>
</template>

<script>
  import Twitter from "../../assets/Twitter.vue";
  import Member from "./Member.vue";
  export default {
    name: 'tomad',
    components: {
      Member,
      Twitter
    }
  }
</script>

<style>

</style>
