import * as THREE from "three"
import Room from "../Room"

class Floor {
    constructor() {
        this.room = new Room()
        this.sizes = this.room.sizes
        this.sence = this.room.sence
        this.setFloor()
    }

    setFloor() {
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshStandardMaterial({
                color: "yellow",
                // roughness: 0.8,
                // metalness: 0.2,
                side: THREE.DoubleSide,
            })
        )
        floor.receiveShadow = true
        floor.rotation.x = Math.PI * -0.5
        floor.position.y = -0.55
        this.sence.add(floor)
    }
}

export default Floor