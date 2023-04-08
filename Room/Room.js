import * as THREE from 'three';
import Sizes from './Utils/Sizes';
import Time from './Utils/Time';
import Resource from './Utils/Resources';
import assets from "./Utils/assets"
import RoomAnimation from './Animation/RoomAnimation';
import Camera from './Camera';
import Renderer from './Renderer';

import World from './World';

class Room {
  static instance
  constructor(canvas) {
    if(Room.instance) return Room.instance
    Room.instance = this
    this.canvas = canvas
    this.sence = new THREE.Scene()
    this.time = new Time()
    this.sizes = new Sizes()
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.resources = new Resource(assets)
    this.world = new World()
    this.isAlready = false
    
    this.resources.on("ready", () => {
      this.isAlready = true
      this.roomAnimation = new RoomAnimation()
    })

    this.time.on("update", () => {
      this.update()
    })
    this.sizes.on("resize", () => {
      this.resize()
    })
  }

  update() {
    this.camera.update()
    this.renderer.update()
    if(this.isAlready) {
      this.roomAnimation.update()
    }
  }
  resize() {
    this.camera.resize()
    this.renderer.resize()
  }
}

export default Room