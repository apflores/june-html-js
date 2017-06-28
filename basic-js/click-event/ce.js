// means that you can't use hoisting
"use strict";
var c = console;

window.onload = function() {
    // get the <ul> list object
    var list = document.getElementById("btns");
    // attach click event to the list
    // example of event bubble
    list.addEventListener("click", function (event) {
        var listitem = event.target;
        c.log(listitem.innerText);
    })
};