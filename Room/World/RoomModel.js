import * as THREE from 'three'
import Room from '../Room'


class RoomModel {
  constructor() {
    this.room = new Room()
    this.sizes = this.room.sizes
    this.sence = this.room.sence
    this.resources = this.room.resources
    this.roomMd = this.resources.items.room
    this.actualRoom = this.roomMd.scene
    this.setModel();
  }

  setModel() {
    this.actualRoom.children.forEach(child => {
      console.log(child);
      child.castShadow = true
      child.receiveShadow = true
    })
    this.sence.add(this.actualRoom)
    this.actualRoom.scale.set(0.5, 0.5, 0.5)
    // this.actualRoom.rotation.y = Math.PI * 0.5
  }
}

export default RoomModel