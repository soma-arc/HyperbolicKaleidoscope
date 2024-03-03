/**
 * @module Vec3
 */
export default class Vec3 {
    /**
     * X value of the vector.
     * @type {number}
     */
    x;
    /**
     * Y value of the vector.
     * @type {number}
     */
    y;
    /**
     * Z value of the vector.
     * @type {number}
     */
    z;

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Add vector
     * @param {Vec3} v
     * @returns {Vec3}
     */
    add(v) {
        return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
    }

    /**
     *
     * @param {Vec3} v
     * @returns {Vec3}
     */
    sub(v) {
        return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    /**
     *
     * @param {Vec3} v
     * @returns {Vec3}
     */
    prod(v) {
        return new Vec3(this.x * v.x, this.y * v.y, this.z * v.z);
    }

    /**
     *
     * @param {Vec3} v
     * @returns {Vec3}
     */
    div(v) {
        return new Vec3(this.x / v.x, this.y / v.y, this.z / v.z);
    }

    /**
     *
     * @param {number} k
     * @returns {Vec3}
     */
    scale(k) {
        return new Vec3(this.x * k, this.y * k, this.z * k);
    }

    /**
     *
     * @returns {number}
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     *
     * @returns {number}
     */
    lengthSq() {
        return (this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     *
     * @returns {Vec3}
     */
    normalize() {
        return this.scale(1.0 / this.length());
    }

    /**
     *
     * @param {Vec3} v
     * @returns {Vec3}
     */
    static normalize(v) {
        return v.normalize();
    }

    /**
     *
     * @param {Vec3} v1
     * @param {Vec3} v2
     * @returns {number}
     */
    static dot(v1, v2) {
        return (v1.x * v2.x + v1.y * v2.y + v1.z * v2.z);
    }

    /**
     *
     * @param {Vec3} v1
     * @param {Vec3} v2
     * @returns {Vec3}
     */
    static cross(v1, v2) {
        return new Vec3(v1.y * v2.z - v1.z * v2.y,
                        v1.z * v2.x - v1.x * v2.z,
                        v1.x * v2.y - v1.y * v2.x);
    }

    /**
     *
     * @param {Vec3} v1
     * @param {Vec3} v2
     * @returns {number}
     */
    static distance(v1, v2) {
        const l = v1.sub(v2);
        return Math.sqrt(l.x * l.x + l.y * l.y);
    }

    /**
     *
     * @param {number} radians
     * @returns {Vec3}
     */
    rotateAroundX(radians) {
        const cosRad = Math.cos(radians);
        const sinRad = Math.sin(radians);
        return new Vec3(this.x,
                        cosRad * this.y + -sinRad * this.z,
                        sinRad * this.y + cosRad * this.z);
    }

    /**
     *
     * @param {number} radians
     * @returns {Vec3}
     */
    rotateAroundY(radians) {
        const cosRad = Math.cos(radians);
        const sinRad = Math.sin(radians);
        return new Vec3(cosRad * this.x + sinRad * this.z,
                        this.y,
                        -sinRad * this.x + cosRad * this.z);
    }

    /**
     *
     * @param {number} radians
     * @returns {Vec3}
     */
    rotateAroundZ(radians) {
        const cosRad = Math.cos(radians);
        const sinRad = Math.sin(radians);
        return new Vec3(cosRad * this.x - sinRad * this.y,
                        sinRad * this.x + cosRad * this.y,
                        this.z);
    }
}
