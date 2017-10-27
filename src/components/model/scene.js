import * as THREE from 'three'

export default renderer = {
  data () {
    return {scene: null}
  },
  created () {
    this.scene = new THREE.Scene()
  }
}
