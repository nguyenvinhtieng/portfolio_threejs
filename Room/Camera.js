import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"


import Room from "./Room"


class Camera {
  constructor() {
    this.room = new Room()
    this.sizes = this.room.sizes;
    this.sence = this.room.sence;
    this.canvas = this.room.canvas;

    this.createPerspectiveCamera()
    this.createOrthographicCamera()
    this.setOrbotControls()
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 100)
    this.sence.add(this.perspectiveCamera)
    this.perspectiveCamera.position.z = 5
    this.perspectiveCamera.position.y = 5
    this.perspectiveCamera.position.x = 5
  }

  createOrthographicCamera() {
    this.frustumSize = 5
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.frustumSize) / 2,
      (this.sizes.aspect * this.frustumSize) / 2,
      this.frustumSize / 2,
      -this.frustumSize / 2,
      -100,
      100
    )
    // this.orthographicCamera.position.z = 3
    this.sence.add(this.orthographicCamera)

    const size = 10
    const divisions = 10

    const gridHelper = new THREE.GridHelper(size, divisions)
    this.sence.add(gridHelper)

    const axesHelper = new THREE.AxesHelper(5)
    this.sence.add(axesHelper)
  }

  setOrbotControls() {
    this.orbitControls = new OrbitControls(this.perspectiveCamera, this.canvas)
    this.orbitControls.enableDamping = true
    this.orbitControls.enableZoom = true
  }

  resize() {
    this.perspectiveCamera.aspect = this.sizes.aspect
    this.perspectiveCamera.updateProjectionMatrix()

    this.orthographicCamera.left = (-this.sizes.aspect * this.frustumSize) / 2
    this.orthographicCamera.right = (this.sizes.aspect * this.frustumSize) / 2
    this.orthographicCamera.top = this.frustumSize / 2
    this.orthographicCamera.bottom = -this.frustumSize / 2
    this.orthographicCamera.updateProjectionMatrix()
  }

  update() {
    
  }
}

export default Camera