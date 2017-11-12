<template>
  <section id="member">

    <h2 class="section-title">MEMBER</h2>

    <el-row :gutter="10" class="member-row">
      <el-col :span="8">
        <kag></kag>
      </el-col>
      <el-col :span="8">
        <kent></kent>
      </el-col>
      <el-col :span="8">
       <mari-sakurai></mari-sakurai>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="member-row">
      <el-col :span="8">
        <one-drink></one-drink>
      </el-col>
      <el-col :span="8">
        <tomad></tomad>
      </el-col>
      <el-col :span="8">
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
  .member-row {
    margin-bottom: 10px;
    max-width: 1200px;
  }
</style>
