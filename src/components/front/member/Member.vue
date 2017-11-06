<template>
  <div>
    <kag></kag>
    <yumeka></yumeka>
    <tomad></tomad>
    <kent></kent>
    <one-drink></one-drink>
    <mari-sakurai></mari-sakurai>
  </div>
</template>

<script>
  import Kag from './Kag.vue';
  import Yumeka from './Yumeka.vue';
  import Kent from './Kent.vue';
  import OneDrink from './1drink.vue';
  import Tomad from './Tomad.vue'
  import MariSakurai from './MariSakurai.vue'

  export default {
    name: 'member',
    components: {
      'kag': Kag,
      'yumeka': Yumeka,
      'one-drink': OneDrink,
      'tomad': Tomad,
      'kent': Kent,
      'mari-sakurai': MariSakurai
    }
  }
</script>

<style scoped>

</style>
