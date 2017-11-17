<template lang="pug">
  member(
    twitterLink="https://twitter.com/ymk_ah",
    soundcloudLink="https://soundcloud.com/yumeka",
    imgSrc="static/yumeka.jpg",
    :objY="10"
  )

    h3.name(slot="name") yumeka

    div(slot="description")
      p ハウス・ミュージックを基盤としながらBass Music等をジャンル、新旧問わず大胆に織り交ぜるスタイルで都内を中心に活動中。Vogue Musicに造詣が深く、新しいものを常に追うスタイルで書く音楽ブログ記事は少なからず評価を得ている。
      p またDommune、NTS Radio、BlockFMなどに出演、トラックメーカーとしてはClassicalTrax等よりトラックをリリースし国内外問わず活動。その他Remix提供、MikeQ,BokBok,DorianConcept等海外DJ来日パーティでのサポート多数。
</template>

<script>
  import Twitter from "../../assets/Twitter.vue";
  import Member from "./Member.vue";

  export default {
    name: 'yumeka',
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
