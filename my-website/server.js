const http=require("http");
const url=require("url");
const fs=require("fs");
const bodyParser = require('body-parser');
const server=http.createServer()

server.on("request", (req, res)=>{
    if(req.url=="/"){
        res.setHeader("content-type", "text/html")
        fs.readFile("./index.html", null, function(error, data){
            if(error){
                console.error(error.message)
                res.end("File not found!")
                
            }else{
                res.write(data)
                res.end()
            }
        })

    }else if(req.url=="/contact"){
        res.setHeader("content-type", "text/html")
        fs.readFile("./contact.html", null, function(error, data){
            if(error){
                console.error(error.message)
                res.end("File not found!")
                
            }else{
                res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
                res.write(data)
                res.end()
            }
        })

    }

})



server.listen(3000)