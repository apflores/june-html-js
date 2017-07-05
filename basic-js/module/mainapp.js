// an anon function
window.app = (function(module2) {
    c.log("main module running");
    c.log(module2.publicVar);
    window.onload = function() {
        module2.doPost(function(data) {
        c.log(data);
        var elem = document.getElementById("main"); 
        elem.innerText = data;
        });
    }
})(window.app2 || (window.app2 = {})); // IIFE function