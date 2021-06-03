

const express= require('express');
const app=express();  //ALLOWS to access all the methods in express post get kinda thing
const path=require('path');
const http=require('http');
const PORT= process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs');



app.get("/",(req,res)=>{
    res.render('indexx');
});

app.get("/index.js",(req,res)=>{
    res.render('index');
});



app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`); 
})