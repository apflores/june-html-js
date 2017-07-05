//Cart app
//to manage the user’s shopping cart as an object and/or array.
//functions: addItem, getItem, updateItem, removeItem, getCart, loadCart, updateCart, getTotal
//to do: updateItem, updateCart
"use strict";

var c = console;
var counter = 0;

function Cart() {
    this.bag = [];
    this.total = 0;
}

var cart = new Cart();

function getCart() {
    return cart;
}

function getTotal() {
    return cart.total;
}

function getMenuItem(name) {
    for (var i = 0; i < menu.length; i++) {
        if (name == menu[i].n) {
            return menu[i];
        }
    }
}

function addItem(item) {
    var check = 0;
    for (var i = 0; i < cart.bag.length; i++) {
        if (cart.bag[i].n == item.n) {
            item.q += 1;
            check = 1;
        }
    }
    if (check == 0) {
        cart.bag[counter] = item;
        counter++;
    }
    cart.total += item.p;
    c.log("Item added");
}

function removeItem(itemName) {
    for (var i = 0; i < cart.bag.length; i++) {
        if (cart.bag[i].n == itemName) {
            cart.total -= ((getMenuItem(itemName).p)*(getMenuItem(itemName).q));
            if (cart.bag[i].q != 1) {
                cart.bag[i].q -= 1;
            } else {
                cart.bag[i] = 0;
            }
        }
    }
    var div = document.getElementById("total");
    div.innerHTML = ("Total: $" + getTotal() + ".00");
}

function uploadCart() {
    var list = document.getElementById("cartList");
    var bag = cart.bag;
    list.innerHTML = "";
    for (var i = 0; i < bag.length; i++) {
        if (bag[i] != 0) {
            var div = document.createElement("div");
            div.innerHTML = (bag[i].n + "<br>Quantity: <input type='text' placeholder=" + bag[i].q + ">" + "<br>Price: $" + ((bag[i].p)*(bag[i].q)) + ".00<br><button value='x'>x</button><br><br>");
            list.appendChild(div);
        }
    }

    var div = document.getElementById("total");
    div.innerHTML = ("Total: $" + getTotal() + ".00");
}