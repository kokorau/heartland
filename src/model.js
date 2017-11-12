import * as THREE from 'three';
import {EffectComposer, ShockwavePass, GlitchPass, RenderPass} from 'postprocessing';
import './model.css';
import camera from './model/camera';
import light from './model/light';
import scene from './model/light';

// ===== window =====
const width = window.innerWidth;
const height = window.innerHeight;

// ===== renderer =====
const renderer = new THREE.WebGLRenderer ({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize (width, height);
renderer.setClearColor (new THREE.Color (0xffffff), 0.0);

// ===== object =====
const geometry = new THREE.BoxGeometry(100, 100, 3);
const material = new THREE.MeshNormalMaterial();

const object = new THREE.Group();

const clock = new THREE.Clock();

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
// scene.add (object);

// ===== postprocessing =====
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const pass = new GlitchPass();
pass.renderToScreen = true;
composer.addPass(pass);

// ===== render =====
document.getElementById('object-stage').appendChild(renderer.domElement);

animate();

function animate () {
  requestAnimationFrame(animate);

  camera.position.x += 0.1;
  camera.position.y += 0.1;

  camera.lookAt( scene.position );

  composer.render(clock.getDelta())
  // renderer.render(scene, camera);
}

function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix ();
  renderer.setSize (window.innerWidth, window.innerHeight);
}
