import "./style.css"
import Room from "./Room"
import Hero from "./Hero"
import Galaxy from "./Galaxy"
import Experience from "./Experience"

const room = new Room(document.querySelector(".room-canvas"))
const hero = new Hero(document.querySelector(".hero svg"), document.querySelector(".hero"))
// const galaxy = new Galaxy(document.querySelector(".galaxy .galaxy-canvas"))
const experience = new Experience()