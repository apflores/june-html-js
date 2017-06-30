"use strict";
var c = console;

window.onload = function() {
    var pokeurl = "http://pokeapi.co/api/v2/pokemon/1";
    var swurl = "http://swapi.co/api/people/1"
    // http://swapi.co/api/people/1?name=joe
    // this is a query string but is totally insecure, but this is when you can put a parameter in the url

    var xhr = new XMLHttpRequest();

    console.log("xhr object created: " + xhr.readyState);

    xhr.onreadystatechange = function() {
        // first check for the state
        if(xhr.readyState == 4) {
            // then check for different error codes using various if statements inside of the complete checker
            if(xhr.status == 200) {
                var data = xhr.responseText;
                c.log(data);
                // make sure you check what kind of data you are using before doing anything
                c.log(JSON.parse(data));

                var elem = document.getElementById("main");
                var obj = JSON.parse(data);
                elem.innerText = obj.name;   
            }
        }
    }
    xhr.open("GET", pokeurl, true);
    xhr.send();
}