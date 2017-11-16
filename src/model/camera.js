import * as THREE from 'three';

// ===== camera =====
const camera = new THREE.PerspectiveCamera (60, window.innerWidth / window.innerHeight, 1, 10000);
// const camera = new THREE.OrthographicCamera( width / - 4, width / 4, height / 4, height / - 4, 10, 10000 );
camera.position.z = 500;

export default camera;
