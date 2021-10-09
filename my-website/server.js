const fs=require("fs");
const path=require("path")
const bodyParser = require('body-parser');
const express=require("express")
const server=express()
const mongoose=require("mongoose")
const Port=process.env.PORT ||3000;
var dbConn =mongoose.connect("mongodb://localhost:27017/fynddb2").then(()=>{
    console.log("Connect to DB")
}).catch((error)=>{
    console.error(error)
})

const static_path=path.join(__dirname, "../public")

server.use(express.static(static_path));
server.set("view engine", "ejs")



server.get("/", (req, res)=>{
    res.render("index")
})

server.get("/contact", (req, res)=>{
    return res.render("contact")
})

server.post("/contact", (req, res)=>{
    return res.redirect("/")
})


server.listen(Port, (req, res)=>{
    console.log(`http://localhost:${Port}`)
})