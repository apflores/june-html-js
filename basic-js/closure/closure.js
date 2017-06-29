"use strict";
var c = console;

function outer() {
    var count = 0;
    // syntax for an internal object
    return {
        addToCount: function(i) { count += i;},
        getCount: function() { return count;}
    };
}

// execute outer and return an "inner" object
var counter = outer();
c.log(counter.getCount());
c.log(counter.addToCount(10));
c.log(counter.getCount());

// can only access the most inner part of function
// so it returns undefined
c.log(counter.count);

function person(fname, lname) {
    var fn = fname;
    var ln = lname;
    return {
        getFullName: function() { return fn + " " + ln;}
    }
}

var joe = person("joe", "k");
c.log(joe.getFullName());