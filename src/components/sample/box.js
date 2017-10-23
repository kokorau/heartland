import * as THREE from 'three';

const width = 800;
const height = 600;

// レンダラーを作成
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// シーンを作成
const scene = new THREE.Scene();

// カメラを作成
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

// 箱を作成
const geometry = new THREE.BoxGeometry(500, 500, 500);
const material = new THREE.MeshPhongMaterial({color: 0xFF0000});
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// 平行光源
const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
directionalLight.position.set(1, 1, 1);
// シーンに追加
scene.add(directionalLight);

export {renderer, scene, camera, box}
