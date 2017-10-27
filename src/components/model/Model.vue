<template>
  <canvas v-html="model"></canvas>
</template>

<script>
  import * as THREE from 'three'
  import scene from "./scene";
  import light from "./light";
  import cube from "./cube";
  import camera from "./camera";

  export default renderer = {
    data () {
      return {
        renderer: null,
        model: null
      }
    },
    mixin: [
      scene,
      light,
      cube,
      camera
    ],
    methods: {
      render() {
        requestAnimationFrame(this.render);
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.cotrols.update();
        this.renderer.render(
          this.scene,
          this.camera
        );
        this.model = this.renderer.domElement
      }
    },
    created () {
      this.render()
    }
  }
</script>

<style scoped>

</style>
