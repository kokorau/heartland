<template>
  <section id="member" class="member">

    <h2 class="section-title">MEMBER</h2>

    <el-row :gutter="10" class="member-row">
      <el-col :span="12">
        <kag></kag>
      </el-col>
      <el-col :span="12">
        <kent></kent>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="member-row">
      <el-col :span="12">
       <mari-sakurai></mari-sakurai>
      </el-col>
      <el-col :span="12">
        <one-drink></one-drink>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="member-row">
      <el-col :span="12">
        <tomad></tomad>
      </el-col>
      <el-col :span="12">
        <yumeka></yumeka>
      </el-col>
    </el-row>

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
      Kag },
    name: 'fr-member'
  }
</script>
<style>
  .member {
    margin-right: 0;
  }
  .member-row {
    margin-bottom: 10px;
    max-width: 1200px;
  }
</style>
