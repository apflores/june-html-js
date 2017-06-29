"use strict";

var c = console;

window.onload = function() {
    var add = document.getElementById("add");
    var task = document.getElementById("task");
    var list = document.getElementById("list");
    
    add.addEventListener("click", function() {
        list.innerHTML += ("<li>" + task.value + "</li>");
        task.value = "";
    });

    list.addEventListener("click", function() {
        list.innerHTML = "";
    });
}