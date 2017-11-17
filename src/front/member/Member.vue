<template lang="pug">
  el-card.m-card(:body-style="bodyStyle")

    img.img(:src="imgSrc", ref="img")

    div.content(style="contentStyle")

      slot(name="name")

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
      const contentStyle = {
        padding: '14px'
      };

      return {
        bodyStyle: bodyStyle,
        contentStyle: contentStyle
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
</style>
