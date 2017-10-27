import * as THREE from 'three'

export default {
  data () {
    return {
      cube: null,
      geometry: null,
      material: null,
      position: {
        x: 0,
        y: 0,
        z: 0
      }
    }
  },
  created () {
    this.material = new THREE.MeshPhongMaterial({ color: '#ffffff'});
    this.geometry = new THREE.BoxGeometry(12,12,12);
    this.cube = new THREE.Mesh( this.geometry, this.material);

    cube.position(
      this.position.x,
      this.position.y,
      this.position.z
    );

    this.scene.add(this.cube);
  }
}
