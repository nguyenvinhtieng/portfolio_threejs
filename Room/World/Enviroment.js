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
    // color red
    // this.sunLight = new THREE.DirectionalLight("0xffffff", 3);
    // this.sunLight.castShadow = true;
    // this.sunLight.shadow.camera.far = 20;
    // this.sunLight.shadow.mapSize.set(1024, 1024);
    // this.sunLight.shadow.normalBias = 0.05;
    // this.sunLight.position.set(0, 10, 10);
    // this.sence.add(this.sunLight);
    // this.ambientLight = new THREE.AmbientLight("white", 0.5);
    // this.sence.add(this.ambientLight);
    // this.update();
    // create point light
    // this.pointLight = new THREE.PointLight("white", 1);
    // this.pointLight.position.set(1, 1, 1);
    // //  add shadow
    // this.pointLight.castShadow = true;
    // this.pointLight.shadow.mapSize.set(1024, 1024);
    // this.pointLight.shadow.camera.far = 20;
    // this.pointLight.shadow.normalBias = 0.05;
    // this.sence.add(this.pointLight);

    this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.normalBias = 0.05;
    const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
    // this.sence.add(helper);

    this.sunLight.position.set(3, 7, 0);
    this.sence.add(this.sunLight);

    this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.sence.add(this.ambientLight);
  }

  update() {
    // this.sunLight.position
    // log
  }

}

export default Enviroment