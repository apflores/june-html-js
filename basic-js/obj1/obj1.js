// basic prototyping
"use strict";
var c = console;
//execute when window and DOM are ready
window.onload = function() {
    function Shape(type, height, width) {
        this.type = type;
        this.height = height;
        this.width = width;
    }

    var triangle = new Shape("triangle", 3, 4);

    Shape.prototype.Area = function() {
        return this.height * this.width;
    }
    
    var square = new Shape("square", 2, 2);
    var rectangle = new Shape("rectangle", 2, 4);
    
    c.log(square.Area());
    c.log(rectangle.Area());
    c.log(triangle.Area());

    // don't use .__proto__ in this instance, use prototype
    String.prototype.prefix = function(msg) {
        return msg + " " + this;
    }
    // this is "world" in this instance
    c.log("world".prefix("hello"));
};