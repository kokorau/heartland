<template lang="pug">
  member(
    twitterLink=""
    soundcloudLink="https://soundcloud.com/marisakurai"
   imgSrc="static/mari-sakurai.jpg")

    h3.name(slot="name", style="font-size: 95%") Mari Sakurai

    div(slot="description")
      p エレクトロニックミュージック・コレクティヴ 〈IN HA〉のメンバーとして、不定期にイベントを開催。過去にはロシアのファッションデザイナー Gosha Rubchinskiの盟友として知られるプロデューサー、buttechnoやUKベース/レイヴ、ジューク/フットワーク、グライム、エクスペリメンタル・テクノなどヴァリエーション豊かなビートを融解し、変名のBasic Rhythm名義でも知られるImaginary Forcesを招聘した。
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

<style lang="sass">
  .name
    padding: 0
</style>
