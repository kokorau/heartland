<template>
  <member
    name="KAG"
    description="description"
    twitterLink="#"
    imgSrc="static/kag.jpg"
  ></member>
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
