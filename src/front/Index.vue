<template lang="pug">
  el-row
    el-col(:xs="12", :sm="24", :md="24", :xl="24")
      div.front(ref="fr")
        fr-title
        fr-member
        fr-description
</template>

<script>
  import FrMember from './FrMember.vue';
  import FrTitle from "./FrTitle.vue";
  import FrDescription from "./FrDescription.vue";

  export default {
    name: 'front',

    mounted () {
      window.addEventListener ('resize', this.onWindowResize);
    },

    methods: {

      onWindowResize () {
        const $fr = this.$refs.fr;

        const width = $fr.clientWidth;
        const height = $fr.clientHeight;

//        $store.commit ('setFrSize', width, height);

      }

    },


    components: {
      FrDescription,
      FrTitle,
      FrMember
    }
  }
</script>
<style lang="sass">
  .front
    z-index: 2
    position: absolute
    width: 100%
    height: 100%
    color: rgb(255, 0, 0)
    text-align: right


</style>
