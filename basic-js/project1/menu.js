var menuApp = (function () {
    var c = console;
    var menu = [];
    var counter = 0;

    function menuItem(name, type, price, quantity, description, img) {
        this.n = name;
        this.t = type;
        this.p = price;
        this.q = quantity;
        this.d = description;
        this.im = img;
    }

    function menuGetter() {
        return menu;
    }

    function addMenuItem(item) {
        menu[counter] = item;
        counter++;
    }

    function getMenu() {
        var list = document.getElementById("list");
        for (var i = 0; i < menu.length; i++) {
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
            li.innerHTML = (menu[i].n + "<br>" + menu[i].im + "<br>" + menu[i].d + "<br>$" + menu[i].p + ".00<br><button value='add'>Add to Cart</button>");
            list.appendChild(li);
        }
    }

        addMenuItem(new menuItem("Adobo", "main", 5.00, 1, "Pork boiled in vinegar and soy sauce", "<img src='Pork-Adobo-3.jpg' alt=''id='pic' class='img-responsive'>"));
        addMenuItem(new menuItem("Fried Fish", "main", 6.00, 1, "Milkfish deep fried", "<img src='milkfish.jpg' alt=''id='pic' class='img-responsive'>"));
        addMenuItem(new menuItem("Tinola", "main", 5.00, 1, "Chicken stew with potatoes and bitter melon", "<img src='tinola.jpg' alt=''id='pic' class='img-responsive'>"));

        addMenuItem(new menuItem("Rice", "side", 1.00, 1, "Jasmine steamed rice", "<img src='rice.jpg' alt=''id='pic' class='img-responsive'>"));
        addMenuItem(new menuItem("Steamed Vegetables", "side", 2.00, 1, "Broccoli, snow peas, green beans, cabbage, carrots", "<img src='veggie.jpg' alt=''id='pic' class='img-responsive'>"));

        addMenuItem(new menuItem("Halo-Halo", "dessert", 5.00, 1, "Classic Filipino dessert with shaved ice, ube ice cream, and sweet gelatin", "<img src='halohalo.jpg' alt=''id='pic' class='img-responsive'>"));
        addMenuItem(new menuItem("Leche Flan", "dessert", 3.00, 1, "Custard flan", "<img src='leche.jpg' alt=''id='pic' class='img-responsive'>"));

    return {
        menu: menu,
        menuGetter: menuGetter,
        menuItem: menuItem,
        addMenuItem: addMenuItem,
        getMenu: getMenu
    }
})();



