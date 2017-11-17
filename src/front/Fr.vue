<template lang="pug">
  div(ref="fr")
    el-row
      el-col(:span="24", :offset="24-span")
        div.front(ref="fr")

    el-row
      el-col(:span="span", :offset="24-span")
        fr-member

    el-row
      el-col(:span="span", :offset="24-span")
        fr-description

</template>

<script>
  import FrMember from './FrMember.vue';
  import FrTitle from "./FrTitle.vue";
  import FrDescription from "./FrDescription.vue";
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    name: 'fr',

    data () {
      return {
        width: 0,
      }
    },

    mounted () {
      window.addEventListener ('resize', this.onWindowResize);
      this.onWindowResize();
    },

    methods: {

      onWindowResize () {
        this.width = window.innerWidth;
      },

      checkBreakpoint () {
        let span = null;

        return col;

      }

    },

    computed: {
    },

    components: {
      ElCol,
      FrDescription,
      FrTitle,
      FrMember
    }
  }
</script>
<style lang="sass">

</style>
