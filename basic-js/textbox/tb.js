"use strict";

var c = console;

window.onload = function() {
    // get the button from the DOM
    var btnElem = document.getElementById("btnGo");
    var inputElem = document.getElementById("tb");

    var clog = function() {
        var elem = event.target;
        c.log(inputElem.value);
    }

    // add click event to button
    btnElem.addEventListener("click", clog);
    btnElem.addEventListener("click", function(event) {
        var numElem = document.getElementById("num");
        var val = numElem.value;
        c.log(val);
        c.log(typeof val);

        var num = parseInt(val);
        c.log(num);
        c.log(typeof num);
    });

    // inputElem.addEventListener("keypress", clog);
};