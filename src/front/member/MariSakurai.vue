<template lang="pug">
  member(
    name="Mari Sakurai"
    twitterLink=""
    soundcloudLink="https://soundcloud.com/marisakurai"
    imgSrc="static/mari-sakurai.jpg")

    div(slot="description")
      p エレクトロニックミュージック・コレクティヴ 〈IN HA〉のメンバーとして、不定期にイベントを開催。過去にはロシアのファッションデザイナー Gosha Rubchinskiの盟友として知られるプロデューサー、buttechnoや
      p UKベース/レイヴ、ジューク/フットワーク、グライム、エクスペリメンタル・テクノなどヴァリエーション豊かなビートを融解し、変名のBasic Rhythm名義でも知られるImaginary Forcesを招聘した。
      p 今年はDOMMUNEやBOILER ROOM TOKYO、DJ NOBUの新パーティーGONG、昨年に引き続きrural 2017への出演も果たすなど、幅広く活動している。

</template>

<script>
  import Twitter from "../../assets/Twitter.vue";
  import Member from "./Member.vue";
  export default {
    name: 'mari-sakurai',
    components: {
      Member,
      Twitter }
  }
</script>

<style>

</style>
