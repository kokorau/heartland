<template lang="pug">
  div(ref="fr")
    el-row
      el-col(:span="span", :offset="24-span")
        div.front(ref="fr")

    el-row
      el-col(:span="span", :offset="24-span")
        //fr-title

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
      span () {
        if (this.width < 768) { // xs
          return 24
        } else if (768 <= this.width && this.width < 992) { // sm
          return 20
        } else if (992 <= this.width && this.width < 1200) { // md
          return 14
        } else if (1200 <= this.width && this.width < 1920) { // lg
          return 12
        } else if (1920 <= this.width) { // xl
          return 12
        }
      }
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
