<template lang="pug">
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

        this.$store.commit('setFrSize',
          $fr.clientWidth,
          $fr.clientWidth
        );
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
