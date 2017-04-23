let Shape = require('ull-shape-alejandro-carlos-samuel');

class Square extends Shape {
    constructor(options) {
        super(options);
    }
    area() {
        let area = Math.pow(this.width, 2);
        return area;
    }
}

Shape.Shapes.Square = Square;
module.exports = Square;