import { Vec2, Vec3 } from './math.js'

export class Cube {
  constructor() {
    this.m_vertices = [
      Vec3.of(-1, -1, 1),
      Vec3.of(1, -1, 1),
      Vec3.of(1, 1, 1),
      Vec3.of(-1, 1, 1),
      Vec3.of(-1, -1, -1),
      Vec3.of(1, -1, -1),
      Vec3.of(1, 1, -1),
      Vec3.of(-1, 1, -1),
    ]

    /**
     * @type { Vec2[] }
     */
    this.m_points = Array(8)
      .fill(null)
      .map(() => Vec2.of(0, 0))
  }

  /**
   * Helper method to get the vertices from a cube
   * @returns { Vec3[] } The vertices of the cube.
   */
  vertices() {
    return [...this.m_vertices]
  }

  /**
   * Helper method to get the points from a cube
   * @returns { Vec2[] } The points of the cube.
   */
  points() {
    return this.m_points
  }

  /**
   * Helper method to set a point on the cube.
   * @param { number } idx The point index.
   * @param { number } x X value for the point.
   * @param { number } y Y value for the point.
   */
  setPoint(idx = 0, x = 0, y = 0) {
    this.m_points[idx] = new Vec2(x, y)
  }

  /**
   * Scales the cube by a scalar.
   * @param { number } by Scalar to scale the cube by.
   * @returns { Cube } The scaled cube.
   */
  scale(by = 1) {
    const cube = new Cube()
    cube.m_vertices = this.m_vertices.map((vertex) => vertex.mul(by))
    return cube
  }
}
