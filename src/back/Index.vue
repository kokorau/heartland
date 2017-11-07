<template>
  <div>
    <div ref="stage"></div>
  </div>
</template>
<script>
  import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    DirectionalLight,
    BoxGeometry,
    MeshPhongMaterial,
    Mesh
  } from 'three';
  import { EffectComposer, GlitchPass, RenderPass } from 'postprocessing';

  export default {
    name: 'bg',
    data () {
      // ===== window =====
      const width = window.innerWidth;
      const height = window.innerHeight;

      // ===== renderer =====
      const renderer = new WebGLRenderer ();
      renderer.setSize(width, height);

      // ===== scene =====
      const scene = new Scene ();

      // ===== camera =====
      const camera = new PerspectiveCamera (45, width / height, 1, 10000); // FIXME
      camera.position.set(0, 0, 1000);

      // ===== light =====
      const light = new DirectionalLight (0xffffff);
      light.position.set (1, 1, 1);

      // ===== object =====
      const geometry = new BoxGeometry (100, 100, 100);
      const material = new MeshPhongMaterial ({ color: 0x0000ff });

      const object = new Mesh (geometry, material);

      return {
        scene: scene,
        camera: camera,
        light: light,
        object: object,
        renderer: renderer
      }
    },
    created () {
      window.addEventListener ('resize', this.onWindowResize);
      this.scene.add (this.camera);
      this.scene.add (this.light);
      this.scene.add (this.object);
    },
    mounted () {
      this.$refs.stage.appendChild(this.renderer.domElement);
      this.animate();
    },
    methods: {
      animate () {
        requestAnimationFrame(this.animate);

        this.object.rotation.x += 0.01;
        this.object.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
      },
      onWindowResize () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix ();
        this.renderer.setSize (window.innerWidth, window.innerHeight);
        this.composer.setSize (window.innerWidth, window.innerHeight);
      }
    }
  }
</script>
<style>

</style>
