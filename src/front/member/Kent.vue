<template>
  <member
    name="KENT"
    description="description"
    twitterLink="#"
    imgSrc="static/kent.jpg"
  ></member>
</template>

<script>
  import Twitter from "../../assets/Twitter.vue";
  import Member from "./Member.vue";
  export default {
    name: 'kent',
    components: {
      Member,
      Twitter }
  }
</script>

<style>

</style>
