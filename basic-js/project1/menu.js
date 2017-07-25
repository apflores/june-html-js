var menuApp = (function () {
    var c = console;
    // var menu = [];
    // var counter = 0;

    // function menuItem(name, type, price, quantity, description, img) {
    //     this.n = name;
    //     this.t = type;
    //     this.p = price;
    //     this.q = quantity;
    //     this.d = description;
    //     this.im = img;
    // }

    // function menuGetter() {
    //     return menu;
    // }

    // function addMenuItem(item) {
    //     menu[counter] = item;
    //     counter++;
    // }

    // addMenuItem(new menuItem("Adobo", "main", 5.00, 1, "Pork boiled in vinegar and soy sauce", "<img src='Pork-Adobo-3.jpg' alt=''id='pic' class='img-responsive'>"));
    // addMenuItem(new menuItem("Fried Fish", "main", 6.00, 1, "Milkfish deep fried", "<img src='milkfish.jpg' alt=''id='pic' class='img-responsive'>"));
    // addMenuItem(new menuItem("Tinola", "main", 5.00, 1, "Chicken stew with potatoes and bitter melon", "<img src='tinola.jpg' alt=''id='pic' class='img-responsive'>"));

    // addMenuItem(new menuItem("Rice", "side", 1.00, 1, "Jasmine steamed rice", "<img src='rice.jpg' alt=''id='pic' class='img-responsive'>"));
    // addMenuItem(new menuItem("Steamed Vegetables", "side", 2.00, 1, "Broccoli, snow peas, green beans, cabbage, carrots", "<img src='veggie.jpg' alt=''id='pic' class='img-responsive'>"));

    // addMenuItem(new menuItem("Halo-Halo", "dessert", 5.00, 1, "Classic Filipino dessert with shaved ice, ube ice cream, and sweet gelatin", "<img src='halohalo.jpg' alt=''id='pic' class='img-responsive'>"));
    // addMenuItem(new menuItem("Leche Flan", "dessert", 3.00, 1, "Custard flan", "<img src='leche.jpg' alt=''id='pic' class='img-responsive'>"));

    function xhrAjax(url, method, data) {
        return new Promise(function (resolve, reject) {
            //console.log("BROOOOOOO");
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true); // SET TO TRUE LATER
            console.log("xhr object created: " + xhr.readyState);

            xhr.onreadystatechange = function () {
                //console.log("AYOOOOOO");
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

    function getMenu(callback) {
        var promise = xhrAjax("http://localhost/webapi/api/Menu", "GET", null);
        promise.then(function (data) {
            callback(data);
        });
    }

    return {
        // menu: menu,
        getMenu: getMenu
        // menuGetter: menuGetter,
        // menuItem: menuItem,
        // addMenuItem: addMenuItem
    }
})();
