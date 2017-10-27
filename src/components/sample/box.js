import * as THREE from 'three';
import { renderer, scene, camera, box } from '@/components/sample/box'

export default {
  data () {
    return {
      obj: {

      }
    }
  },
  created () {
    const width = 800;
    const height = 600;

    // レンダラーを作成
    this.renderer = new THREE.WebGLRenderer ();
    this.renderer.setSize (width, height);
    document.body.appendChild (this.renderer.domElement);

    // シーンを作成
    this.scene = new THREE.Scene ();

    // カメラを作成
    this.camera = new THREE.PerspectiveCamera (45, width / height, 1, 10000);
    this.camera.position.set (0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry (500, 500, 500);
    const material = new THREE.MeshPhongMaterial ({ color: 0xFF0000 });
    this.box = new THREE.Mesh (geometry, material);
    this.scene.add (this.box);

    // 平行光源
    const directionalLight = new THREE.DirectionalLight (0xFFFFFF);
    directionalLight.position.set (1, 1, 1);
    // シーンに追加
    this.scene.add (directionalLight);

    this.tick ()
  },
  methods: {
    tick () {
      requestAnimationFrame (this.tick);

      this.box.rotation.x += 0.01;
      this.box.rotation.y += 0.01;

      this.renderer.render (this.scene, this.camera)
    }
  }
}




