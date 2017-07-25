window.app = (function (mod1, mod2) {
    var c = console;

    window.onload = function () {

        // load the menu
        mod1.getMenu(function (data) {
            c.log(data);
            var list = document.getElementById("list");
            for (var i = 0; i < data.length; i++) {
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
                li.innerHTML = (data[i].itemName + "<br>" + data[i].imageTag + "<br>" + data[i].itemDescription + "<br>$" + data[i].price + "<br><button value='add'>Add to Cart</button>");
                list.appendChild(li);
            }
        });

        

        mod2.uploadCart(function (data) {
            var list = document.getElementById("cartList"); 
            list.innerHTML = "";
                for (var i = 0; i < data.length; i++) {
                    if (data[i] != 0) {
                        var parentDiv = document.createElement("div");
                        var div = document.createElement("div");
                        parentDiv.innerHTML = (data[i].name + "<br>Price: $" + ((data[i].price) * (data[i].quantity)) + ".00");
                        div.innerHTML = "Quantity: <input type='text' placeholder=" + data[i].quantity + " id=" + i + "><button value='x'>x</button><br><br>";
                        parentDiv.appendChild(div);
                        list.appendChild(parentDiv);
                    }
                }
            mod2.updateCart();
        });

        var list = document.getElementById("list");
        var cartList = document.getElementById("cartList");

        list.addEventListener("click", function (event) {
            var eventTar = event.target.parentElement.innerHTML;
            var split = eventTar.split("<");
            var itemName = split[0];
            c.log(itemName);
            //write code to use callback function again
            mod2.addItem(mod2.getMenuItem(itemName));
            mod2.uploadCart();
        });
        //return the object
        //make new object
        //post to put it into database

        //a get cart needs to happen as well

        cartList.addEventListener("click", function (event) {
            var item = event.target;
            if (item.value == "x") {
                var eventTar = item.parentElement.parentElement.innerHTML;
                var split = eventTar.split("<");
                var itemName = split[0];
                mod2.removeItem(itemName);
                cartList.removeChild(item.parentElement.parentElement);
                mod2.uploadCart();
            }
            c.log(mod2.getCart());
        });

        
    }
})(menuApp, cartApp);