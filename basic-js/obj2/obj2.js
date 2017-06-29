"use strict";
var c = console;

window.onload = function() {
    var rect = new Rectangle(2,4);
    c.log(rect.Area());
};

// a shape object
function Shape(height, width) {
    this.h = height;
    this.w = width;
}

// rectangle object using a shape object
function Rectangle(height, width) {
    Shape.call(this, height, width);
    // area function 
    this.Area = function() {
        return this.h * this.w;
    }
}

function Square(length) {
    this.prototype = Object.create(Rectangle.prototype)
    Rectangle.call(this, length, length);
}
Square.prototype.constructor = Square;
function Triangle(height, width) {
    Rectangle.call(this, height, width);
    this.prototype = new Rectangle(height, width);
    this.getArea = function() {
        return this.prototype.Area()/2;
    }
}