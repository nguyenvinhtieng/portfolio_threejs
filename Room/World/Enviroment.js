import * as THREE from "three";
import Room from "../Room";

class Enviroment {
  constructor() {
    this.room = new Room()
    this.sence = this.room.sence
    this.resources = this.room.resources

    this.setSunLight();
    
  }

  setSunLight() {
    this.sunLight = new THREE.DirectionalLight(0xffffff, 3);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(0, 10, 10);
    this.sence.add(this.sunLight);
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.sence.add(this.ambientLight);
  }
}

export default Enviroment