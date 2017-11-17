<template lang="pug">
  member(
    twitterLink="https://twitter.com/IXVIIVIIIIV",
    imgSrc="static/kent.jpg",
    :objY="32"
    )

    h3.name(slot="name") KENT

    div(slot="description")
      p 1997年神奈川県生まれ出身の20歳。
      p イベントオーガナイザー ・ DJ ・ プロデューサーをしていて、2015年5月から渋家のメンバーになり渋家の活動に携わりはじめ2017年4月から「パーティーメーカー」というテーマを掲げ渋家の10代目代表に就任。
      p 現在はイベントオーガナイザーとして都内にて年に数回のペースでイベントを主催している。

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

<style lang="sass">
  .name
    margin: 0
</style>
