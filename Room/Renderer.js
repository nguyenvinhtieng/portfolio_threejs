import * as THREE from "three"
import Room from './Room.js'
class Renderer {
  constructor() {
    this.room = new Room()
    this.sizes = this.room.sizes;
    this.sence = this.room.sence;
    this.canvas = this.room.canvas;
    this.camera = this.room.camera;
    this.setRenderer()
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    })
    this.renderer.useLegacyLights  = true
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.75
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(this.sizes.pixelRatio)
  }

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(this.sizes.pixelRatio)
  }
  update() {
    this.renderer.render(this.sence, this.camera.perspectiveCamera)
  }
}

export default Renderer