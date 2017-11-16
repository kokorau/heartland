<template lang="pug">
  div.member
    img(:src="imgSrc")

    div
      h3.m-name {{name}}
        span
          twitter(v-if="twitterLink != ''", :link="twitterLink")
          soundcloud(v-if="soundcloudLink != ''", :link="soundcloudLink")

      div.m-description
        slot(name="description")
</template>

<script>
  import Twitter from "../../assets/Twitter.vue";
  import Soundcloud from "../../assets/SoundCloud.vue";

  export default {
    components: {
      Soundcloud,
      Twitter
    },
    name: 'member',
    props: {
      name: { type: String },
      twitterLink: { type: String, default: '' },
      soundcloudLink: { type: String, default: '' },
      imgSrc: { type: String }
    }
  }
</script>

<style lang="sass">
  .m-description
    color: #fff

  .card
    background-color: rgba(0, 0, 0, 0.3)
    border: none
    border-radius: 2px
    color: #ff3030
    max-width: 800px
    margin-right: 0
    margin-left: auto
    img
      width: 100%
      height: 254px
      object-fit: cover

  .m-name
     margin: 0

</style>
