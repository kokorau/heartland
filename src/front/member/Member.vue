<template>
  <el-card :body-style="cardStyle">
    <img :src="imgSrc" class="image"/>
    <div style="padding:14px;">
      <h3>
        {{name}}
        <span>
          <twitter
            v-if="twitterLink != ''"
            :link="twitterLink"
          ></twitter>
          <soundcloud
            v-if="soundcloudLink != ''"
            :link="soundcloudLink"
          ></soundcloud>
        </span>
      </h3>
      <slot name="description">
        description
      </slot>
    </div>
  </el-card>
</template>

<script>
  import ElCard from "../../../node_modules/element-ui/packages/card/src/main.vue";
  import Twitter from "../../assets/Twitter.vue";
  import Soundcloud from "../../assets/SoundCloud.vue";

  export default {
    components: {
      Soundcloud,
      Twitter,
      ElCard },
    name: 'member',
    data() {
      return {
        cardStyle: {
          'padding': '0',
          'border': '0px'
        }
      }
    },
    props: {
      name: {type: String},
      twitterLink: {type: String, default: ''},
      soundcloudLink: {type: String, default: ''},
      imgSrc: {type:String}
    }
  }
</script>

<style>
  .el-card {
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    border: none;
    border-radius: 2px;
  }
  .image {
    width: 100%;
    height: 254px;
    object-fit: cover;
  }
</style>
