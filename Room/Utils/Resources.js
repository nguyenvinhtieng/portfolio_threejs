import * as THREE from "three";
import EventEmitter from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import Room from "../Room";

class Resource extends EventEmitter {
  constructor(assets) {
    super();
    this.room = new Room()
    this.renderer = this.room.renderer
    this.assets = assets

    this.items = {}
    this.queue = this.assets.length
    this.loaded = 0
    this.setLoader();
    this.startLoading();
  }

  setLoader() {
    this.loaders = {}
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath("/draco/");
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
  }

  startLoading() {
    console.log("Assets is loading...");
    this.assets.forEach((asset) => {
      if(asset.type === "glbModel") {
        this.loaders.gltfLoader.load(asset.path, (file) => {
          this.singleAssetLoaded(asset, file);
        });
      }
    });
  }
  singleAssetLoaded(asset, file) {
    this.items[asset.name] = file;
    this.loaded++;
    if (this.loaded === this.queue) {
      this.emit("ready");
    }

  }
}

export default Resource;