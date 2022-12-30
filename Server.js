const express=require("express");
const app=express();
const path=require("path");

app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname,"public/hello.html"));


});
app.listen(3001);
console.log("welcome");