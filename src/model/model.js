import * as THREE from 'three';
// import {EffectComposer, ShockwavePass, GlitchPass, RenderPass} from 'postprocessing';
import './model.css';
import camera from './camera';
import scene from './light';
import object from './boxes';

// ===== window =====
const width = window.innerWidth;
const height = window.innerHeight;

// ===== renderer =====
const renderer = new THREE.WebGLRenderer ({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize (width, height);
renderer.setClearColor (new THREE.Color (0xffffff), 0.0);

// ===== light =====
const light = new THREE.DirectionalLight (0xffffff);
light.position.set (1, 1, 1);


// ===== assembly  =====
const clock = new THREE.Clock();

window.addEventListener ('resize', onWindowResize);
scene.add (camera);
scene.add (light);
// scene.add (object);

// ===== postprocessing =====
// const composer = new EffectComposer(renderer);
// composer.addPass(new RenderPass(scene, camera));
//
// const pass = new GlitchPass();
// pass.renderToScreen = true;
// composer.addPass(pass);

// ===== render =====
document.getElementById('object-stage').appendChild(renderer.domElement);

animate();

function animate () {
  requestAnimationFrame(animate);

  camera.position.x += 0.1;
  camera.position.y += 0.1;

  camera.lookAt( scene.position );

  // composer.render(clock.getDelta())
  renderer.render(scene, camera);
}

function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix ();
  renderer.setSize (window.innerWidth, window.innerHeight);
}
