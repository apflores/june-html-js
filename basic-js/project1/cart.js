//Cart app
//to manage the user’s shopping cart as an object and/or array.
//functions: addItem, getItem, updateItem, removeItem, getCart, loadCart, updateCart, getTotal
//to do: updateItem, updateCart
var cartApp = (function () {
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
        //fix this
        var menu = getMenu();
        c.log(menu);
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
        c.log(item.p);
        cart.total += item.p;
        c.log(cart);
    }

    function removeItem(itemName) {
        for (var i = 0; i < cart.bag.length; i++) {
            if (cart.bag[i].n == itemName) {
                cart.total -= ((getMenuItem(itemName).p) * (getMenuItem(itemName).q));
                cart.bag[i] = 0;
                getMenuItem(itemName).q = 1;
            }
        }
    }

    //function uploadCart() {
        
    //}

    function updateCart() {
        var div = document.getElementById("total");
        div.innerHTML = ("Total: $" + getTotal() + ".00");
    }

    function xhrAjax(url, method, data) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true); 
            console.log("xhr object created: " + xhr.readyState);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(Error(xhr.status + " " + xhr.statusText));
                    }
                }
            }
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.send(JSON.stringify(data));
        });
    }

    function uploadCart(callback) {
        var promise = xhrAjax("http://localhost/webapi/api/Cart", "GET", null);
        promise.then(function (data) {
            callback(data);
        });
    }

    return {
        getCart: getCart,
        getTotal: getTotal,
        getMenuItem: getMenuItem,
        addItem: addItem,
        removeItem: removeItem,
        uploadCart: uploadCart,
        updateCart: updateCart
    }
})();

