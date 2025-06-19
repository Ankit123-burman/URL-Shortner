const express = require('express');
const {getOriginalUrl, shortUrl } = require('./Controllers/Url');
const { default: mongoose } = require('mongoose');
const app = express()

app.use(express.urlencoded({extended:true}))

const port = 1000;

mongoose.connect('mongodb://localhost:27017/short')
.then(()=>console.log("mongoose conected"))
.catch((err)=>console.log(err))

app.get('/',(req,res)=>{
    res.render("index.ejs",{shortUrl : null})
})

app.post('/short',shortUrl)

app.get("/:shortCode",getOriginalUrl)

app.listen(port,()=>{
    console.log('server running',port); 
})