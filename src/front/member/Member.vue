<template lang="pug">
  el-card.m-card(:body-style="bodyStyle")

    img.img(:src="imgSrc", ref="img")

    div.content

      div.name.font-bowlby
        slot(name="name")

      div.description
        slot(name="description")

      div.links
        twitter(v-if="twitterLink", :link="twitterLink")
        soundcloud(v-if="soundcloudLink", :link="soundcloudLink")

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

    data () {
      const bodyStyle = {
        'padding': '0',
      };

      return {
        bodyStyle: bodyStyle,
      }
    },

    mounted () {
      this.$refs.img.style.objectPosition = `0 ${this.objY}%`;
    },

    props: {
      name: { type: String },
      twitterLink: { type: String, default: '' },
      soundcloudLink: { type: String, default: '' },
      imgSrc: { type: String },
      objY: {type: Number, default: 50}
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../global"
  $content-padding: 3px

  .img
    width: 100%
    max-height: 25vh
    object-fit: cover

  .el-card
    background-color: rgba(0, 0, 0, 0.5)
    color: #fff
    font-size: 1.3vh
    border: none
    border-radius: 3px
    margin-bottom: 1.5px

  .links
    padding-right: 10px

  .description
    text-align: left
    padding-left: $content-padding
    padding-right: $content-padding

  .name
    color: $main-color
    font-size: 400%
    margin-top: -50px

  .name > h3
    margin: 0
</style>
