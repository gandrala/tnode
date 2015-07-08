var express = require("express");

var app = express();

app.get("/",new function(req,res){

res.send("Hello from inside containder");
});
app.listen(8080);
