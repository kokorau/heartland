import * as THREE from 'three'

export default {
  data () {
    return {camera: null}
  },
  created () {
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.set(0, 0, 100);
  }
}
