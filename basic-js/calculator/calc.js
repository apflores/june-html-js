"use strict";
var c = console;
var result = 0;
var num1 = 0;
var num2 = 0;

window.onload = function () {
    var tab = document.getElementById("tab");

    tab.addEventListener("click", function (event) {
        var tabItem = event.target.innerText;
        if (tabItem == "+") {
            num1 = result;
            result = 0;
            c.log(tabItem);
        }
        if (tabItem == "=") {
            num2 = result;
            return c.log(Number(num1) + Number(num2));
        }
        if (tabItem != "+") {
            if (result == 0) {
                result = tabItem;
            } else {
                result += tabItem;
            }
            c.log(result);
        }
    })
};
