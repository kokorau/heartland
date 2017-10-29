<template>
  <div>
    <canvas ref="canvas">
    </canvas>
  </div>
</template>

<script>
  import * as THREE from 'three';

  export default {

    data () {
      return {
        camera: null,
        scene: null,
        renderer: null,
        width: null,
        height: null,
        objects: []
      }
    },

    created () {
      this.scene = new THREE.Scene ();
    },

    mounted () {
      this.width = this.$el.clientWidth;
      this.height = this.$el.clientHeight;

      // === camera ===
      this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
      this.camera.position.set(0, 0, +1000);

      // === renderer ===
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);

      // === controls ===


      // === light ===
      const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
      directionalLight.position.set(1, 1, 1);

      this.scene.add(directionalLight);

    },

    methods: {

      getScene () {
        return this.Scene
      },

      getWorld () {
        return this.world;
      },

      render () {
        this.controls.update ();
        this.renderer.render (this.scene, this.camera);
      }

    },

    props: [],

    components: {
      Box
    }

  }
</script>

<style scoped>

</style>
