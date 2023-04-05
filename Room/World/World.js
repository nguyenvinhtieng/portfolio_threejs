import * as THREE from 'three'
import Room from '../Room.js'
import RoomModel from './RoomModel.js'
import Enviroment from './Enviroment.js'

class World {
  constructor() {
    this.room = new Room()
    this.sizes = this.room.sizes
    this.sence = this.room.sence
    this.canvas = this.room.canvas
    this.camera = this.room.camera
    this.resources = this.room.resources
    this.resources.on("ready", () => {
      this.enviroment = new Enviroment()
      this.roomModel = new RoomModel()
      console.log("Created room");
    })
    
  }

  resize() {}

  update() {}

}

export default World