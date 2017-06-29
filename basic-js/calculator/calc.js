"use strict";
var c = console;
var result = 0;
var num1 = 0;
var num2 = 0;

window.onload = function () {
    var tab = document.getElementById("tab");

    tab.addEventListener("click", function (event) {
        var tabItem = event.target.innerText;
        if (result == 0) {
            result = tabItem;
        } else {
            result += tabItem;
        }
        var dis = document.getElementById("display");
        dis.innerHTML = result;

        if(tabItem == "c") {
            dis.innerHTML = 0;
            result = 0;
        }

        if (tabItem == "=") {
            if (result.includes("+")) {
                var spl = result.split("+");
                num1 = parseInt(spl[0]);
                num2 = parseInt(spl[1]);
                dis.innerHTML = (num1 + num2);
                result = dis.innerHTML;
                num1 = result;
            } else if (result.includes("-")) {
                var spl = result.split("-");
                num1 = parseInt(spl[0]);
                num2 = parseInt(spl[1]);
                dis.innerHTML = (num1 - num2);
                result = dis.innerHTML;
                num1 = result;
            } else if (result.includes("*")) {
                var spl = result.split("*");
                num1 = parseInt(spl[0]);
                num2 = parseInt(spl[1]);
                dis.innerHTML = (num1 * num2);
                result = dis.innerHTML;
                num1 = result;
            } else if (result.includes("/")) {
                var spl = result.split("/");
                num1 = parseInt(spl[0]);
                num2 = parseInt(spl[1]);
                dis.innerHTML = (num1 / num2);
                result = dis.innerHTML;
                num1 = result;
            }
        }

    });
}
