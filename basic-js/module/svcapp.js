window.app2 = (function() {
    var privateVar = "i'm a private variable";
    function doPost(callback) {
        var url = "http://jsonplaceholder.typicode.com/posts";

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 201) {
                    var data = xhr.responseText;
                    callback(data);
                    //c.log(data);
                }
            }
            var dataToSend = {
                name: "joe", 
                title: "trouble maker", 
                userID: 1
            };
            xhr.open("POST", url, true);
            xhr.send();
        }
    }
    // public variables and functions
    return {
        doPost: doPost,
        publicVar: privateVar
    }
})();