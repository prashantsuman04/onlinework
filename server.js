var express = require ("express");

var app = express();

app.get("/",(req,res)=>{

    res.send(
        "<h1>Vijay Salses </h1>"
        +"hr/"
        +"<h1>HEllllllloooo noonononon</h1>"
        +"</br>"
        +"<ol>"
        +"<li>smart device 1</li>"
        +"<li>smart device 2</li>"
        +"<li>smart device 3</li>"
        +"<li>smart device 4</li>"
        +"</ol>"

    );
});

var server = app.listen(9000);
console.log("vijay sale online");
