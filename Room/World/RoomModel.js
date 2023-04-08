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
      child.castShadow = true
      child.receiveShadow = true
      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
            groupchild.castShadow = true;
            groupchild.receiveShadow = true;
        });
    }
    })
    this.sence.add(this.actualRoom)
    this.actualRoom.position.set(0.7, -0.2, 0)
    this.actualRoom.scale.set(0.6, 0.6, 0.6)
    // this.actualRoom.rotation.y = Math.PI * 0.5
  }
}

export default RoomModel

