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
        if (item.value == "x") {
            var eventTar = item.parentElement.innerHTML;
            var split = eventTar.split("<");
            var itemName = split[0];
            removeItem(itemName);
            cartList.removeChild(item.parentElement);
            
        }
        if(item.value == "update") {
            var getId = item.parentElement.parentElement;
            var getParentNode = item.parentNode;
            c.log(getParentNode);
            var list = document.getElementsByTagName("input");
            c.log(getId);
            c.log(list);
        }

        c.log(getCart());
    });

}();