"use strict";
var c = console;
var menu = [];
var counter = 0;

function menuItem(name, type, price, quantity) {
    this.n = name;
    this.t = type;
    this.p = price;
    this.q = quantity;
}

function addMenuItem(item) {
    menu[counter] = item;
    counter++;
}

function getMenu() {
    var list = document.getElementById("list");
    for (var i = 0; i < menu.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = (menu[i].n + "<br>$" + menu[i].p + ".00<br><button value='add'>Add to Cart</button>");
        list.appendChild(li);
    }
    return {
        ActualMenu: menu
    }
}

addMenuItem(new menuItem("Adobo", "main", 5.00, 1));
addMenuItem(new menuItem("Fried Fish", "main", 6.00, 1));
addMenuItem(new menuItem("Tinola", "main", 5.00, 1));

addMenuItem(new menuItem("Rice", "side", 1.00, 1));
addMenuItem(new menuItem("Steamed Vegetables", "side", 2.00, 1));

addMenuItem(new menuItem("Halo-Halo", "dessert", 5.00, 1));
addMenuItem(new menuItem("Leche Flan", "dessert", 3.00, 1));


