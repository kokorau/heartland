<template>
  <div>
    <kag></kag>
    <kent></kent>
    <mari-sakurai></mari-sakurai>
    <one-drink></one-drink>
    <tomad></tomad>
    <yumeka></yumeka>
  </div>
</template>
<script>
  import Kag from "./member/Kag.vue";
  import Kent from "./member/Kent.vue";
  import MariSakurai from "./member/MariSakurai.vue";
  import OneDrink from "./member/OneDrink.vue";
  import Tomad from "./member/Tomad.vue";
  import Yumeka from "./member/Yumeka.vue";

  export default {
    components: {
      Yumeka,
      Tomad,
      OneDrink,
      MariSakurai,
      Kent,
      Kag },
    name: 'fr-member'
  }
</script>
<style>

</style>
