import * as THREE from 'three'

export default {
  data () {
    return {
      light: null
    }
  },
  created () {
    this.light = new THREE.DirectionalLight('#aaaaff', 1);
    this.light.position.set(0, 10, 10);
    this.scene.add(this.light)
  }
}
