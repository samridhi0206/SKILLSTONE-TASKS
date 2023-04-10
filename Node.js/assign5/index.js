const express = require('express');
const app=express();
const port=2000;
app.use(express.json());
app.use(express.static('public'))
app.set('view engine','home')

app.get('/form',(req,res)=>{
    res.render('./home.pug')
});

app.listen(port,()=>{
    console.log("Listening port " +port);
})