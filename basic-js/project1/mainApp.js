"use strict";

var c = console;

getMenu();

window.app = function () {
    var list = document.getElementById("list");
    var cartList = document.getElementById("cartList");

    list.addEventListener("click", function (event) {
        var eventTar = event.target.parentElement.innerHTML;
        var split = eventTar.split("<");
        var itemName = split[0];
        addItem(getMenuItem(itemName));
        uploadCart();
    });

    cartList.addEventListener("click", function (event) {
        var item = event.target;
        var eventTar = item.parentElement.innerHTML;
        var split = eventTar.split("<");
        var itemName = split[0];
        c.log(itemName);
        if (item.value == "x") {
            removeItem(itemName);
            cartList.removeChild(item.parentElement);
            
        }
        c.log(getCart());
    });

}();