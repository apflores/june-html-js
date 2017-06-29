"use strict";

var c = console;

window.onload = function () {
    var add = document.getElementById("add");
    var task = document.getElementById("task");
    var list = document.getElementById("list");
    var finished = document.getElementById("finished");

    add.addEventListener("click", function () {
        var li = document.createElement("li");
        li.innerHTML = (task.value + "  <button value='check'>✓</button> <button value='x'>X</button>");
        list.appendChild(li);
        task.value = "";
    });

    list.addEventListener("click", function (event) {
        var item = event.target;
        if (item.value == "x") {
            list.removeChild(item.parentElement);
        } else if(item.value == "check") {
            finished.appendChild(item.parentElement);
            c.log(list);
            c.log(finished);
        }
    });

    finished.addEventListener("click", function(event) {
        var item = event.target;
        if (item.value == "x") {
            finished.removeChild(item.parentElement);
        } else if(item.value == "check") {
            list.appendChild(item.parentElement);
        }
    });
}