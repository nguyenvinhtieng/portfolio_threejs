import "./style.css"
import Room from "./Room"
import Hero from "./Hero"
import Sphere from "./Sphere"
import Experience from "./Experience"

const room = new Room(document.querySelector(".room-canvas"))
const hero = new Hero(document.querySelector(".hero svg"), document.querySelector(".hero"))
const sphere = new Sphere(document.querySelector(".sphere-canvas"))

const experience = new Experience()