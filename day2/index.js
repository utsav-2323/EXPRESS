const express = require("express");
const port = 1001;

const app = express();

app.set("view engine", "ejs");

let std = [
    {id:1,name:"utsav",subject:"react.js",phone:12345},
    {id:2,name:"arjun",subject:"html",phone:90099},
    {id:3,name:"jeet",subject:"boostep",phone:5098},
]

app.get("/",(req,res)=>{
    res.render("index", {std});
})

app.listen(port,(err)=>{
    err ? console.log(err) :console.log(`server started on port ${port}`);
});