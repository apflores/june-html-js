"use strict";

var c = console;

window.onload = function() {
    var add = document.getElementById("add");
    var task = document.getElementById("task");
    var list = document.getElementById("list");
    var li = document.createElement("li");
    
    add.addEventListener("click", function() {
        li.appendChild(task.value);
        //list.innerHTML += ("<li>" + task.value + "</li>");
        task.value = "";
    });

    list.addEventListener("click", function() {
        list.innerHTML = "";
    });

    function todo(id, task) {
        this.i = id;
        this.t = task;
    }
}