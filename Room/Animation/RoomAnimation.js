import * as THREE from "three"
import Room from "../Room"
import { OBJECTS } from "../object"

class RoomAnimation {
    constructor() {
        this.room = new Room()
        this.camera = this.room.camera
        this.actualyroom = this.room.world.roomModel.actualRoom
        this.actualyroom.children.forEach(child => {
            switch (child.name) {
                case OBJECTS.RUBIK:
                    this.rubikObject = child
                    this.rubikObject.position.y += 0.05
                    break
                case OBJECTS.CHAIR:
                    this.chairObject = child
                    this.chairProperty = {
                        rotate: 0,
                        isLeft: true
                    }
                    break
                case OBJECTS.COMPUTER1:
                    this.computer1Object = child
                    break
                default:
                    break
            }
        })

        // add onwhell event to zoom in to computer1
        window.addEventListener("wheel", (e) => {
            // this.onWheel(e)
            // use lodash to throttle
        })
        this.targetPositionOnWheel = {
            x: this.computer1Object.position.x - 3,
            y: this.computer1Object.position.y - 3,
            z: this.computer1Object.position.z - 3
        }
        console.log(this.targetPositionOnWheel);
        console.log(this.camera.perspectiveCamera.position);

    }

    onWheel(e) {
        // this.camera.camera.position.z += e.deltaY * 0.001
        console.log(this.camera);
        if(e.deltaY > 0) {
            this.camera.perspectiveCamera.position.x = this.targetPositionOnWheel.x
            this.camera.perspectiveCamera.position.y = this.targetPositionOnWheel.y
            this.camera.perspectiveCamera.position.z = this.targetPositionOnWheel.z
        }else {
            this.camera.perspectiveCamera.position.z = 0.9
            this.camera.perspectiveCamera.position.y = 1.5
            this.camera.perspectiveCamera.position.x = 0.8
            this.actualyroom.rotation.y = -Math.PI * 0.5
            // this.camera.perspectiveCamera.position = new THREE.Vector3(3, 3, 3)
        }


    }

    rubikAnimation() {
        if(this.rubikObject) {
            this.rubikObject.rotation.x += 0.01
            this.rubikObject.rotation.y += 0.01
            this.rubikObject.rotation.z += 0.01
        }
    }

    chairAnimation() {
        if(this.chairObject) {
            if(this.chairObject.rotation.y >= 2) {
                this.chairProperty.isLeft = false
            }
            if(this.chairObject.rotation.y <= 0.4) {
                this.chairProperty.isLeft = true
            }
            if(this.chairProperty.isLeft) {
                this.chairObject.rotation.y += 0.01
            }else {
                this.chairObject.rotation.y -= 0.01
            }
        }
    }

    update() {
        this.rubikAnimation()
        this.chairAnimation()
    }
}

export default RoomAnimation