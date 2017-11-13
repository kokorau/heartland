<template>
  <div class="card">
    <img :src="imgSrc" class="image"/>
    <div>

      <h3 class="m-name">

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

      <slot name="description" class="m-description">
        <!-- description comes here -->
      </slot>
    </div>
  </div>
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

<style>
  .m-description {
    color: #fff;
  }
  .card {
    background-color: rgba(0, 0, 0, 0.0);
    border: none;
    border-radius: 2px;
    color: #ff3030;
    max-width: 800px;
    margin-right: 0;
    margin-left: auto;
  }
  .m-name {
   margin: 0;
  }
  .image {
    width: 100%;
    height: 254px;
    object-fit: cover;
  }
</style>
