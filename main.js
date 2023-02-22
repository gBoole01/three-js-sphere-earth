import * as THREE from 'three'
import './style.css'

// ____ RENDERER ____
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

// ____ SCENE & CAMERA ____
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(40, 0, 0)
camera.lookAt(new THREE.Vector3(0, 0, 0))

// ____ SHAPES ____
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/earth-uv-map.jpg') })
)
scene.add(sphere)

// ____ ANIMATIONS ____
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()

addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})