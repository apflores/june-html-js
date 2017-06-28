// console - built in js object that connects to console
var c = console;

// window is an object of the entire window
// onload is when the entire window is loaded including a prepared DOM
// fires when DOM is rendered
window.onload = function() {
    var elem = document.getElementById("main");
    log(elem);
}

// a function
function log(val) {
    c.log(val);
}
// executed function
// log('hello');

// document is from the actual page; this is the dom
// get functions always return an array
// executed before page is done
var elem = document.getElementById("main");
log(elem);
