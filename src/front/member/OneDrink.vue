<template>
  <member
    name="1drink"
    twitterLink="#"
    imgSrc="static/1drink.jpg"
  >
    <div slot="description">
      <p>Technoを軸に様々なダンスミュージックの境界を彷徨いながら現在にいたる。</p>
      <p></p>ときどき街の片隅をにぎわせている。
    </div>
  </member>
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

<style>

</style>
