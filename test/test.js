let Shape = require('@alejandro-carlos-samuel/ull-shape');
let Square = require('../lib/square.js');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe("Shape", function() {
    it("Se crea correctamente el objeto Shape", function() {
        let figura = new Shape({
            width: 8
        }, 'Square');
        assert.typeOf(figura, 'Object');
        expect(figura).to.not.be.undefined;
    })
});

describe("Square", function() {
    it("Se crea correctamente el objeto Square", function() {
        let figura = new Square({
            width: 3
        });
        assert.typeOf(figura, 'Object');
        expect(figura).to.not.be.undefined;
    })
});

describe("getArea()", function() {
    it("Se calcula correctamente el área usando Shape", function() {
        let figura = new Shape({
            width: 8
        }, 'Square');
        let squareArea = figura.getArea();
        expect(squareArea).to.equal(64);
    })
    
    it("Se calcula correctamente el área usando Square", function() {
        let figura = new Square({
            width: 3
        });
        let squareArea = figura.getArea();
        expect(squareArea).to.equal(9);
    })
    
});