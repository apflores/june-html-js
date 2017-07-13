window.app = (function (mod1, mod2) {
    var c = console;

    window.onload = function () {

        mod1.getMenu();
        
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