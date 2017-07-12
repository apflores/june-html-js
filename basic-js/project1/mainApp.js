"use strict";

var c = console;

getMenu();

window.app = function () {
    var list = document.getElementById("list");
    var cartList = document.getElementById("cartList");

    list.addEventListener("click", function (event) {
        var eventu = event.target;
        var eventTar = event.target.parentElement.innerHTML;
        var split = eventTar.split("<");
        var itemName = split[0];
        c.log(itemName);
        addItem(getMenuItem(itemName));
        uploadCart();
    });

    cartList.addEventListener("click", function (event) {
        var item = event.target;
        if (item.value == "x") {
            var eventTar = item.parentElement.parentElement.innerHTML;
            var split = eventTar.split("<");
            c.log(split);
            var itemName = split[0];
            c.log(itemName);
            removeItem(itemName);
            cartList.removeChild(item.parentElement.parentElement);
            updateCart();
        }

        c.log(getCart());
    });

}();