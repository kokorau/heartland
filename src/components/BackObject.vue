<template>
  <div
    id="stage"
    ref="canvas"
  ></div>
</template>

<script>
  import * as THREE from 'three';

  export default {
    name: 'back-object',
    data () {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // === renderer ===
      const renderer = new THREE.WebGLRenderer ();
      renderer.setSize (width, height);

      // === scene ===
      const scene = new THREE.Scene();
      scene.background = new THREE.Color( 0xaaaaaa );
      scene.fog = new THREE.Fog( 0xddffdd, 1, 1000 );

      // === camera ===
      const camera = new THREE.PerspectiveCamera( 60, width / height, 1, 10000 );
      camera.position.z = 500;
      scene.add (camera);

      // === box ===
      const geometry = new THREE.TorusGeometry(100, 8, 16, 100);
      const material = new THREE.MeshNormalMaterial();
      const boxes = new THREE.Group();
      for (let i = 0; i < 500; i ++ ) {
        const mesh = new THREE.Mesh (geometry, material);
        mesh.position.x = Math.random() * 2000 - 1000;
        mesh.position.y = Math.random() * 2000 - 1000;
        mesh.position.z = Math.random() * 2000 - 1000;
        // mesh.rotation.x = Math.random() * 2 * Math.PI;
        // mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.matrixAutoUpdate = false;
        mesh.updateMatrix();
        boxes.add( mesh );
      }

      scene.add (boxes);

      // === light ===
      const light = new THREE.DirectionalLight (0x444444);
      light.position.set (1, 1, 1);
      scene.add (light);

      // === glitch ===

      return {
        height: height,
        width: width,
        renderer: renderer,
        scene: scene,
        camera: camera,
        boxes: boxes,
        light: light,
        mouse: {x: 0, y: 0}
      }
    },
    mounted () {
      this.$refs.canvas.appendChild (
        this.renderer.domElement
      );
      this.animate();
    },
    methods: {
      animate() {
        requestAnimationFrame(this.animate);

        this.render();
      },
      render() {
        const time = Date.now () * 0.001;
        const rx = Math.sin (time * 0.7) * 0.5,
          ry = Math.sin (time * 0.3) * 3,
          rz = Math.sin (time * 0.2) * 0.5;
        // 箱を回転させる
        this.camera.position.x += this.camera.position.x * 0.5;
        this.camera.position.y += this.camera.position.y * 0.5;
        this.boxes.rotation.x = rx;
        this.boxes.rotation.y = ry;
        this.boxes.rotation.z = rz;

        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);
      }
    }
  }
</script>

<style scoped>

</style>
