<template>
  <div>
    <p>test</p>
    <div v-html="renderer.domElement"></div>
  </div>
</template>

<script>
  import { renderer, scene, camera, box } from '@/components/sample/box'

  export default {
    data () {
      return {
        scene: scene,
        camera: camera,
        renderer: renderer,
        box: box
      }
    },
    created () {
      this.tick()
    },
    methods: {
      tick () {
        requestAnimationFrame(this.tick);

        this.box.rotation.x += 0.01;
        this.box.rotation.y += 0.01;

        this.renderer.render(this.scene, this.camera)
      }
    }
  }
</script>

<style>
  #canvas {
    width: 800px;
    height: 600px;
  }
</style>
