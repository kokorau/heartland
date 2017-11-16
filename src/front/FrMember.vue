<template lang="pug">
  section#member.member

    h2.section-title MEMBER

    kag
    kent
    mari-sakurai
    one-drink
    tomad
    yumeka

</template>
<script>
  import Kag from "./member/Kag.vue";
  import Kent from "./member/Kent.vue";
  import MariSakurai from "./member/MariSakurai.vue";
  import OneDrink from "./member/OneDrink.vue";
  import Tomad from "./member/Tomad.vue";
  import Yumeka from "./member/Yumeka.vue";
  import ElCard from "../../node_modules/element-ui/packages/card/src/main.vue";

  export default {
    name: 'fr-member',
    components: {
      ElCard,
      Yumeka,
      Tomad,
      OneDrink,
      MariSakurai,
      Kent,
      Kag
    }
  }
</script>
<style lang="sass">
  .section-title
    font-size: 60px

</style>
