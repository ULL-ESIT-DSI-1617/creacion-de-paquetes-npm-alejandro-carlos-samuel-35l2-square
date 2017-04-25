let Shape = require('@alejandro-carlos-samuel/ull-shape');

/**
 * Clase cuadrado. Hereda de Shape. Es posible calcular el área de un cuadrado
 * @type {Square}
 */
class Square extends Shape {
    /**
     * Constructor de la clase Square
     * @param  {JSON} options Las opciones se pasan como objeto JSON
     */
    constructor(options) {
        super(options);
    }
    /**
     * Función que calcula el área de un cuadrado
     * @return {number} Es el resultado de calcular el área del cuadrado
     */
    area() {
        let area = Math.pow(this.width, 2);
        return area;
    }
}
Shape.Shapes.Square = Square;
module.exports = Square;