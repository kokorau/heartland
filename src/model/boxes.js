import * as THREE from 'three';

// ===== object =====
const geometry = new THREE.BoxGeometry(100, 100, 3);
const material = new THREE.MeshNormalMaterial();

const object = new THREE.Group();

const amount = 500;
for (let i=0; i<amount; i++) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = Math.random() * 2000 - 1000;
//        mesh.position.y = Math.random() * 2000 - 1000;
  mesh.position.z = Math.random() * 2000 - 1000;

//        mesh.rotation.x = Math.random() * 2 * Math.PI;
//        mesh.rotation.y = Math.random() * 2 * Math.PI;

  object.add(mesh);
}

export default {object};
