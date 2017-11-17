<template lang="pug">
  member(
    twitterLink="https://twitter.com/tomad"
    imgSrc="static/tomad.jpg"

    )

    h3.name(slot="name") tomad

    div(slot="description")
      p インターネットレーベル「Maltine Records」主宰。2006年頃からラップトップを使ったDJ活動開始。都内を中心にLIQUIDROOMやUNIT、AIR、MOGRAなど様々なクラブでプレイ。2009年から都内のクラブにて年数回のペースで自身レーベルのイベントオーガナイズもしている。
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

<style lang="sass">
  .name
    margin: 0
</style>
