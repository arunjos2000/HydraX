const express = require("express");


const app = express();
 app.get("/",function(req,res){
res.send("hai");



 });

 app.listen(3000,function(){
 console.log("server opened");
 });
