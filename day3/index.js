const express = require("express");
const port = 1002;

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded());

let std = [
    {id:1,name:"utsav",subject:"react.js",phone:12345},
    {id:2,name:"arjun",subject:"html",phone:90099},
    {id:3,name:"jeet",subject:"boostep",phone:5098},
]

app.get("/", (req,res) => {
    res.render("index", {std});
});

app.post("/addData", (req,res) => {
    req.body.id = std.length + 1;
    std.push(req.body);
    res.redirect("/");
});

app.get("/deleteData", (req,res) => {
    let deleteRecord = std.filter((item)=> item.id != req.query.id);
    std = deleteRecord;
    res.redirect("/");
})

app.get("/editData/:id", (req,res) => {
    let singleData = std.find((item) => item.id == req.params.id);
    res.render("edit", {singleData});
})

app.post("/updateData", (req,res) => {
    std.forEach((std) => {
        if(std.id == req.body.id){
            (std.id = req.body.id),
            (std.name = req.body.name),
            (std.subject = req.body.subject),
            (std.phone = req.body.phone);
        }
        else{
            std;
        }
    });
    res.redirect("/");
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server start on port ${port}`)
});