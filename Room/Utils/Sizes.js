import EventEmitter from "events"

class Sizes extends EventEmitter{
  constructor() {
    super()
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.aspect = this.width / this.height
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onResize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.aspect = this.width / this.height
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    this.emit('resize')
  }
}
export default Sizes