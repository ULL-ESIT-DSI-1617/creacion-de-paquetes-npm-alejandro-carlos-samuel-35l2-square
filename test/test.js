let Shape = require('../lib/shape.js');
let Square = require('../lib/square.js');
let assert = require('chai').assert;
let expect = require('chai').expect;


describe("Shape", function() {
  it("Se crea correctamente el objeto Shape", function() {
      let figura = new Shape({ width: 8, height: 2 }, 'Triangle');
      assert.typeOf(figura, 'Object');
      expect(figura).to.not.be.undefined;
  })
  
  it ("Se crea correctamente un cuadrado y se calcula su área", function() {
      let figure = new Shape({width: 3}, 'Square');
      let squareArea = figure.getArea();
      assert.typeOf(figure, 'Object');
      expect(figure).to.not.be.undefined;
      expect(squareArea).to.equal(9);
      
  })

});