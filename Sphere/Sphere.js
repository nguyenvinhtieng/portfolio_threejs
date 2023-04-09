import * as THREE from 'three';
import gsap from 'gsap';

class Sphere {
    constructor(element) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.mouseX;
        this.mouseY;
        this.renderer = new THREE.WebGLRenderer({ canvas: element, antialias: true });
        this.renderer.setSize(window.innerWidth / 3 * 2, window.innerHeight / 3 * 2);
        // set transparent background
        this.renderer.setClearColor(0x000000, 0);
        this.distance = Math.min(200, window.innerWidth / 4);
        this.geometry = new THREE.BufferGeometry();
        this.vertices = [];
        for(let i = 0; i < 3000; i++) {
            let vertex = new THREE.Vector3();
            let theta = THREE.MathUtils.randFloatSpread(360);
            let phi = THREE.MathUtils.randFloatSpread(360);
            vertex.x = this.distance * Math.sin(theta) * Math.cos(phi);
            vertex.y = this.distance * Math.sin(theta) * Math.sin(phi);
            vertex.z = this.distance * Math.cos(theta);
            this.vertices.push(vertex.x, vertex.y, vertex.z);
        }
        this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.vertices, 3));
        this.particles = new THREE.Points(this.geometry, new THREE.PointsMaterial({color: "#ed75ff", size: 2}));
        this.particles.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 50);
        this.renderingParent = new THREE.Group();
        this.renderingParent.add(this.particles);
        this.resizeContainer = new THREE.Group();
        this.resizeContainer.add(this.renderingParent);
        this.scene.add(this.resizeContainer);

        this.camera.position.z = 400;
        this.myTween;
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        document.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        this.animate();
        this.animProps = { scale: 1, xRot: 0, yRot: 0 }
        gsap.to(this.animProps, {
            duration: 10,
            scale: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "sine",
            onUpdate: function () {
                this.renderingParent.scale.set(this.animProps.scale, this.animProps.scale, this.animProps.scale)
            }.bind(this)
        });
        
        gsap.to(this.animProps, {
            duration: 120,
            xRot: Math.PI * 2,
            yRot: Math.PI * 4,
            repeat: -1,
            yoyo: true,
            ease: "none",
            onUpdate: function () {
                this.renderingParent.rotation.set(this.animProps.xRot, this.animProps.yRot, 0)
            }.bind(this)
        });
    }
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
    onMouseMove(event) {
        if (this.myTween) {
            this.myTween.kill();
        }
        this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        this.myTween = gsap.to(this.particles.rotation, {
            duration: 0.1,
            x: this.mouseY * -1,
            y: this.mouseX,
        });
    }
}

export default Sphere;