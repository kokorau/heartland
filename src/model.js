import * as THREE from 'three';
import './model.css';

// ===== window =====
const width = window.innerWidth;
const height = window.innerHeight;

// ===== renderer =====
const renderer = new THREE.WebGLRenderer ({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize (width, height);
renderer.setClearColor (new THREE.Color (0xffffff), 0.0);

// ===== scene =====
const scene = new THREE.Scene ();
scene.fog = new THREE.Fog (0x777777, 1, 600);

// ===== camera =====
const camera = new THREE.PerspectiveCamera (60, width / height, 1, 10000);
// const camera = new THREE.OrthographicCamera( width / - 4, width / 4, height / 4, height / - 4, 10, 10000 );
camera.position.z = 500;

// ===== light =====
const light = new THREE.DirectionalLight (0xffffff);
light.position.set (1, 1, 1);

// ===== object =====
const geometry = new THREE.BoxGeometry(5, 400, 3);
const material = new THREE.MeshPhongMaterial();

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

// ===== assembly  =====
window.addEventListener ('resize', onWindowResize);
scene.add (camera);
scene.add (light);
scene.add (object);

document.getElementById('object-stage').appendChild(renderer.domElement);

animate();

function animate () {
  requestAnimationFrame(animate);

  camera.position.x += 0.1;
  camera.position.y += 0.1;

  camera.lookAt( scene.position );

  renderer.render(scene, camera);
}

function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix ();
  renderer.setSize (window.innerWidth, window.innerHeight);
}
