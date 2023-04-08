import gsap from "gsap";

class Hero {
    constructor(element, parent) {
        this.svgns = "http://www.w3.org/2000/svg";
        this.root = element;
        this.ease = 0.75;
        this.pointer = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        };
        this.parent = parent;
        let leader = (prop) => {
            return prop === "x" ? this.pointer.x : this.pointer.y;
        }
        let total = 50;
        for (let i = 0; i < total; i++) {
            leader = this.createLine(leader, i);
        }
        this.setAnimation();
    }
    setAnimation() {
        window.addEventListener("mousemove", (e) => {
            this.pointer.x = e.clientX;
            this.pointer.y = e.clientY;
            // this.pointer.x = e.clientX - this.parent.offsetTop - window.scrollY;
            // this.pointer.y = e.clientY - window.innerHeight / 2;
            // console.log(this.parent.offsetTop)
            // console.log(window.scrollY);
        });
        //  set animation line auto change position
        // gsap.to(this.pointer, {
        //     duration: 10,
        //     x: "+=150",
        //     y: "+=10",
        //     repeat: -1,
        //     ease: "expo.inOut",
        // });
        //  set animation line auto change position
        // setInterval(() => {
        //     this.pointer.x = Math.random() * window.innerWidth;
        //     this.pointer.y = Math.random() * window.innerHeight;
        // }, 300);

    }
  createLine(leader, i) {
    let line = document.createElementNS(this.svgns, "line");
    this.root.appendChild(line);

    gsap.set(line, { x: -1500, y: -750 });

    let pos = gsap.getProperty(line);

    gsap.to(line, {
      duration: 10000,
      x: "+=150",
      y: "+=10",
      repeat: -1,
      ease: "expo.inOut",
      modifiers: {
        x: () => {
          let posX = pos("x");
          let leaderX = leader("x");
          let x = posX + (leaderX - posX) * this.ease;
          line.setAttribute("x2", leaderX - x);
          return x;
        },
        y: () => {
          let posY = pos("y");
          let leaderY = leader("y");
          let y = posY + (leaderY - posY) * this.ease;
          line.setAttribute("y2", leaderY - y);
          return y;
        },
      },
    });

    return pos;
  }
}

export default Hero;
