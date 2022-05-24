export class Vec2 {
  /**
   * Constructor for the Vec2 class.
   *
   * @param { number } x X for the vector.
   * @param { number } y Y for the vector.
   */
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  /**
   * Translates a vector by a given value for the x and y axis.
   * @param { number } x X to be added in the translation of the vector.
   * @param { number } y Y to be added in the translation of the vector.
   * @returns { Vec2 } A translated vector instance.
   */
  translateBy(x = 0, y = 0) {
    return new Vec2(this.x + x, this.y + y)
  }

  /**
   * Turns the vector into an array.
   * @returns { number[] } An array containing the fields of the vector.
   */
  toArray() {
    return [this.x, this.y]
  }

  /**
   * Multiplier the vector by a scalar.
   * @param { number } by The scalar to multiply the vector by.
   * @returns { Vec2 } The multiplied vector.
   */
  mul(by) {
    return new Vec2(this.x * by, this.y * by)
  }

  /**
   * Static method to build a vector instance.
   * @param { number } x X value for the vector.
   * @param { number } y Y value for the vector.
   * @returns { Vec2 } The vector instance.
   */
  static of(x = 0, y = 0) {
    return new Vec2(x, y)
  }
}

export class Vec3 {
  /**
   * Constructor for the Vec3 class.
   *
   * @param { number } x X for the vector.
   * @param { number } y Y for the vector.
   * @param { number } z Z for the vector.
   */
  constructor(x = 0, y = 0, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  /**
   * Turns the vector into an array.
   * @returns { number[] } An array containing the fields of the vector.
   */
  toArray() {
    return [this.x, this.y, this.z]
  }

  /**
   * Multiplier the vector by a scalar.
   * @param { number } by The scalar to multiply the vector by.
   * @returns { Vec2 } The multiplied vector.
   */
  mul(by) {
    return new Vec3(this.x * by, this.y * by, this.z * by)
  }

  /**
   * Utility function to create a 2D vector from a 3D vector.
   * @returns { Vec2 } A 2D vector.
   */
  toVec2() {
    return new Vec2(this.x, this.y)
  }

  /**
   * Applies the dot product function from the projection matrix to the current vector instance.
   * @param { ProjectionMatrix } projection Projection matrix to apply the dot product to.
   * @returns { Vec3 } The projected vector.
   */
  dotProduct(projection) {
    return projection.dotProduct(this)
  }

  /**
   * Static method to build a vector instance.
   * @param { number } x X value for the vector.
   * @param { number } y Y value for the vector.
   * @param { number } z Z value for the vector.
   * @returns { Vec3 } The vector instance.
   */
  static of(x = 0, y = 0, z = 0) {
    return new Vec3(x, y, z)
  }
}

export class ProjectionMatrix {
  /**
   * Constructor for the projection matrix.
   *
   * @param { Vec3 } x X projection for the matrix.
   * @param { Vec3 } y Y projection for the matrix.
   * @param { Vec3 } z Z projection for the matrix.
   */
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }

  /**
   * Multiplies the projection matrix by a vector.
   * @param { Vec3 } vec Vector to multiply the projection matrix by.
   * @returns { Vec3 } The projected vector.
   */
  dotProduct(vec) {
    return new Vec3(
      this.x.x * vec.x + this.y.x * vec.y + this.z.x * vec.z,
      this.x.y * vec.x + this.y.y * vec.y + this.z.y * vec.z,
      this.x.z * vec.x + this.y.z * vec.y + this.z.z * vec.z
    )
  }
}
