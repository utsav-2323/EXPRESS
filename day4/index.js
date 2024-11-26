const express = require("express");
const port = 1003;

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded());

let book = [
    {id:1,name:"pk"},
    {id:2,name:"bhaijan"},
    {id:3,name:"abcd"},
]

app.get("/",(req,res)=>{
    res.render("index", {book});
});

app.post("/addData", (req,res) => {
    req.body.id = book.length + 1;
    book.push(req.body);
    res.redirect("/");
});

app.get("/deleteData", (req,res) => {
    let deleteRecord = book.filter((item)=> item.id != req.query.id);
    book = deleteRecord;
    res.redirect("/");
})

app.get("/editData/:id", (req,res) => {
    let singleData = book.find((item) => item.id == req.params.id);
    res.render("edit", {singleData});
})

app.post("/updateData", (req,res) => {
    book.forEach((std) => {
        if(book.id == req.body.id){
            (book.id = req.body.id),
            (book.name = req.body.name);
        }
        else{
            std-book;
        }
    });
    res.redirect("/");
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server start ${port}`)
})