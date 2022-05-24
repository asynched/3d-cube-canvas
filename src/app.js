import { Cube } from './entities.js'
import { ProjectionMatrix, Vec3 } from './math.js'
import { Color, enumerate, range } from './utils.js'

const projectionMatrix = new ProjectionMatrix(
  Vec3.of(1, 0, 0),
  Vec3.of(0, 1, 0),
  Vec3.of(0, 0, 0)
)

export default class App {
  constructor({ width = 800, height = 600 } = {}) {
    this.angle = 0
    this.width = width
    this.height = height
    this.canvas = document.querySelector('canvas')
    this.context = this.canvas.getContext('2d')

    this.cube = new Cube()
  }

  _update() {
    this.context.fillStyle = Color.BLACK
    this.context.fillRect(0, 0, this.width, this.height)

    const rotationZ = new ProjectionMatrix(
      Vec3.of(Math.cos(this.angle), -Math.sin(this.angle), 0),
      Vec3.of(Math.sin(this.angle), Math.cos(this.angle), 0),
      Vec3.of(0, 0, 1)
    )

    const rotationY = new ProjectionMatrix(
      Vec3.of(Math.cos(this.angle), 0, Math.sin(this.angle)),
      Vec3.of(0, 1, 0),
      Vec3.of(-Math.sin(this.angle), 0, Math.cos(this.angle))
    )

    const rotationX = new ProjectionMatrix(
      Vec3.of(Math.cos(this.angle), -Math.sin(this.angle), 0),
      Vec3.of(Math.sin(this.angle), Math.cos(this.angle), 0),
      Vec3.of(0, 0, 1)
    )

    this.angle += 0.01

    this.context.fillStyle = Color.WHITE

    for (const [idx, vertex] of enumerate(this.cube.scale(100).vertices())) {
      const [x, y] = vertex
        .dotProduct(rotationZ)
        .dotProduct(rotationY)
        .dotProduct(rotationX)
        .dotProduct(projectionMatrix)
        .toVec2()
        .translateBy(this.width / 2, this.height / 2)
        .toArray()

      this.cube.setPoint(idx, x, y)
      this.context.fillRect(x, y, 2, 2)
    }

    const points = this.cube.points()

    this.context.beginPath()
    this.context.moveTo(points[0].x, points[0].y)
    this.context.strokeStyle = Color.WHITE

    for (const index of range(0, 4)) {
      const current = points[index]
      const next = points[(index + 1) % 4]
      this.context.lineTo(current.x, current.y)
      this.context.lineTo(next.x, next.y)
      this.context.stroke()
    }

    for (const index of range(0, 4)) {
      const current = points[index + 4]
      const next = points[((index + 1) % 4) + 4]
      this.context.moveTo(current.x, current.y)
      this.context.lineTo(next.x, next.y)
      this.context.stroke()
    }

    for (const index of range(0, 4)) {
      const current = points[index]
      const next = points[index + 4]
      this.context.moveTo(current.x, current.y)
      this.context.lineTo(next.x, next.y)
      this.context.stroke()
    }

    this.context.closePath()

    requestAnimationFrame(this._update.bind(this))
  }

  start() {
    this._update()
    return this
  }

  setup() {
    this.canvas.width = this.width
    this.canvas.height = this.height
    return this
  }

  static default() {
    return new App()
  }
}
