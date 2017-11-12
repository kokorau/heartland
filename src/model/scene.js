import * as THREE from 'three';

// ===== scene =====
const scene = new THREE.Scene ();
scene.fog = new THREE.Fog (0x777777, 1, 600);
const background = new THREE.TextureLoader ().load ('static/main.jpg');
scene.background = background;

export default scene;
