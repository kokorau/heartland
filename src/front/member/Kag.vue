<template lang="pug">
  member(
    twitterLink="https://twitter.com/shi10hiwa3"
    imgSrc="static/kag.jpg",
    :objY="50"
    )

    h3.name(slot="name") kag

    div(slot="description")
      p 山形県天童市出身。インターネットミュージックに影響を受け上京。渋家で開催されたパーティ「ZOO」を主催し、tomad、食品まつり a.k.a foodman、Kane Westらとパーティを行う。
      p 代官山WEEKEND GARAGE TOKYOでのDJラウンジオーガナイズや、渋谷のコミュニティーラジオ「渋谷のラジオ」でディレクターを務めるなど活動は多岐にわたる。
</template>

<script>
  import Twitter from "../../assets/Twitter.vue";
  import Member from "./Member.vue";

  export default {
    name: 'kag',
    components: {
      Member,
      Twitter
    }
  }
</script>

<style>
  .name {
    margin: 0
  }
</style>
