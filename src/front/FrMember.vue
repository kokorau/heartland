<template>
  <section id="member" class="member">

    <h2 class="section-title">MEMBER</h2>

    <kag></kag>
    <kent></kent>
    <mari-sakurai></mari-sakurai>
    <one-drink></one-drink>
    <tomad></tomad>
    <yumeka></yumeka>

  </section>
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
    components: {
      ElCard,
      Yumeka,
      Tomad,
      OneDrink,
      MariSakurai,
      Kent,
      Kag
    },
    name: 'fr-member'
  }
</script>
<style>
  .member {
  }
</style>
