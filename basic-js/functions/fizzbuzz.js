var c = console;

// fizzbuzz function that prints to console
// only goes up to 15
function fb() {
    var i;
    for (i = 1; i < 16; i = i + 1) {
        if (i % 3 == 0) {
            c.log(i + " : fizz");
            document.write("<p id='jsf'>" + "fizz" + "</p>");
        } else if (i % 5 == 0) {
            c.log(i + " : buzz");
            document.write("<p id='jsb'>" + "buzz" + "</p>");
        } else if (i % 15 == 0) {
            c.log(i + " : fizzbuzz");
            document.write("<p id='jsb'>" + "fizzbuzz" + "</p>");
        } else {
            c.log(i + " : " + i);
            document.write("</br>" + i + "</br>");
        }
    }
}
// calls fizzbuzz function
fb();

// changes inner text for main div
main.innerHTML = "My new text!";



