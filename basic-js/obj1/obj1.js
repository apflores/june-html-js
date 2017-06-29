"use strict";
var c = console;
//execute when window and DOM are ready
window.onload = function() {
    function Shape(type, height, width) {
        this.type = type;
        this.height = height;
        this.width = width;
    }

    var square = new Shape("square", 2, 2);
    var rectangle = new Shape("rectangle", 2, 4);
    var triangle = new Shape("triangle", 3, 4);

    c.log(Shape);
    c.log(square);
    c.log(rectangle);
    c.log(triangle);


};