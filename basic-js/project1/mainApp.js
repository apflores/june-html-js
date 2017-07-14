window.app = (function (mod1, mod2) {
    var c = console;

    window.onload = function () {

        // load the menu
        (function () {
            var list = document.getElementById("list");
            for (var i = 0; i < mod1.menu.length; i++) {
                if (i == 0) {
                    var label = document.createElement("li");
                    label.innerHTML = "<li class='heading'>Main</li>"
                    list.appendChild(label);
                }
                if (i == 3) {
                    var label = document.createElement("li");
                    label.innerHTML = "<li class='heading'>Sides</li>"
                    list.appendChild(label);
                }
                if (i == 5) {
                    var label = document.createElement("li");
                    label.innerHTML = "<li class='heading'>Desserts</li>"
                    list.appendChild(label);
                }
                var li = document.createElement("li");
                li.innerHTML = (mod1.menu[i].n + "<br>" + mod1.menu[i].im + "<br>" + mod1.menu[i].d + "<br>$" + mod1.menu[i].p + ".00<br><button value='add'>Add to Cart</button>");
                list.appendChild(li);
            }

        })();

        var list = document.getElementById("list");
        var cartList = document.getElementById("cartList");

        list.addEventListener("click", function (event) {
            var eventTar = event.target.parentElement.innerHTML;
            var split = eventTar.split("<");
            var itemName = split[0];
            mod2.addItem(mod2.getMenuItem(itemName));
            mod2.uploadCart();
        });

        cartList.addEventListener("click", function (event) {
            var item = event.target;
            if (item.value == "x") {
                var eventTar = item.parentElement.parentElement.innerHTML;
                var split = eventTar.split("<");
                var itemName = split[0];
                mod2.removeItem(itemName);
                cartList.removeChild(item.parentElement.parentElement);
                mod2.updateCart();
            }
            c.log(mod2.getCart());
        });
    }
})(menuApp, cartApp);