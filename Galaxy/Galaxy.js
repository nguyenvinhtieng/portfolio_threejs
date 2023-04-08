import * as THREE from 'three';
import gsap from 'gsap';
class Galaxy {
    constructor(element) {
        this.canvas = element;
        this.sence = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.mouseX = 0;
        this.mouseY = 0;
        this.sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.renderer = new THREE.WebGLRenderer({  canvas: this.canvas, antialias: true });
        this.renderer.useLegacyLights  = true
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping
        this.renderer.toneMappingExposure = 1.75
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(this.sizes.pixelRatio)
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // add a cube in the middle of the scene
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.sence.add(this.cube);
        this.camera.position.z = 5;


        // this.distance = Math.min(200 , window.innerWidth / 4);
        // this.geometry = new THREE.BufferGeometry();
        // for (let i = 0; i < 2000; i++) {
        //     let vertex = new THREE.Vector3();
        //     let theta = THREE.MathUtils.randFloatSpread(360);
        //     let phi = THREE.MathUtils.randFloatSpread(360);

        //     vertex.x = this.distance * Math.sin(theta) * Math.cos(phi);
        //     vertex.y = this.distance * Math.sin(theta) * Math.sin(phi);
        //     vertex.z = this.distance * Math.cos(theta);
        //     this.geometry.vertices.push(vertex);
        // }
        // this.particles = new THREE.Points(this.geometry, new THREE.PointsMaterial({ color: "red", size: 2 }));
        // this.particles.boundingSphere = 50;
        // this.renderParent = new THREE.Group();
        // this.renderParent.add(this.particles);

        // this.resizeContainer = new THREE.Group();
        // this.resizeContainer.add(this.renderParent);
        // this.sence.add(this.resizeContainer);
        // this.camera.position.z = 5;
        // this.tween = null
        // this.animate = function () {
        //     requestAnimationFrame(this.animate.bind(this));
        //     this.renderer.render(this.sence, this.camera);
        // }
        // this.animProps = { scale: 1, xRot: 0, yRot: 0 };
        // this.animate();
        // this.onMouseMove()
        // gsap.to(this.animProps, {
        //     duration: 10,
        //     scale: 1.3,
        //     repeat: -1,
        //     yoyo: true,
        //     ease: "power2.inOut",
        //     opUpdate: () => {
        //         this.renderParent.scale.set(this.animProps.scale, this.animProps.scale, this.animProps.scale);
        //     }
        // })
        // gsap.to(this.animProps, {
        //     duration: 120,
        //     xRot: Math.PI * 2,
        //     yRot: Math.PI * 4,
        //     repeat: -1,
        //     yoyo: true,
        //     onUpdate: () => {
        //         this.renderParent.rotation.set(this.animProps.xRot, this.animProps.yRot, 0);
        //     }
        // })

    } 
    onMouseMove() {
        // document.addEventListener("mousemove", (event) => {
        //     if(this.tween) this.tween.kill();
        //     this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        //     this.mouseY = (event.clientY / window.innerHeight) * 2 + 1;
        //     this.tween = gsap.to(this.particles.rotation, {
        //         duration: 0.1,
        //         x: this.mouseY*-1,
        //         y: this.mouseX,
        //     })
        // })
    }
}

export default Galaxy;