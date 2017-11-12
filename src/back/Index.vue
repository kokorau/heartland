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
    Mesh,
    MeshNormalMaterial, Group, Color, Fog, OrthographicCamera, MeshPhongMaterial
  } from 'three';

  export default {
    name: 'model',
    data: function () {
      // ===== window =====
      const width = window.innerWidth;
      const height = window.innerHeight;

      // ===== renderer =====
      const renderer = new WebGLRenderer ({ alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize (width, height);
      renderer.setClearColor (new Color (0xffffff), 0.0);

      // ===== scene =====
      const scene = new Scene ();
      scene.fog = new Fog (0x777777, 1, 600);

      // ===== camera =====
      const camera = new PerspectiveCamera (60, width / height, 1, 10000);
      // const camera = new OrthographicCamera( width / - 4, width / 4, height / 4, height / - 4, 10, 10000 );
      camera.position.z = 500;

      // ===== light =====
      const light = new DirectionalLight (0xffffff);
      light.position.set (1, 1, 1);

      // ===== object =====
      const geometry = new BoxGeometry(5, 400, 3);
      const material = new MeshPhongMaterial();

      const object = new Group();

      const amount = 500;
      for (let i=0; i<amount; i++) {
        const mesh = new Mesh(geometry, material);
        mesh.position.x = Math.random() * 2000 - 1000;
//        mesh.position.y = Math.random() * 2000 - 1000;
        mesh.position.z = Math.random() * 2000 - 1000;

//        mesh.rotation.x = Math.random() * 2 * Math.PI;
//        mesh.rotation.y = Math.random() * 2 * Math.PI;

        object.add(mesh);
      }

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

        this.camera.position.x += 0.1;
        this.camera.position.y += 0.1;

        this.camera.lookAt( this.scene.position );

        this.renderer.render(this.scene, this.camera);
      },
      onWindowResize () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix ();
        this.renderer.setSize (window.innerWidth, window.innerHeight);
      }
    }
  }
</script>
<style>

</style>
