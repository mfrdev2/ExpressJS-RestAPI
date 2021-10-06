const express = require('express');
const route = express.Router();


route.get('/circle',(req,res)=>{
    res.sendFile(process.cwd()+"/views/circle.html");
});
route.post('/circle',(req,res)=>{
    const radious = req.body.radious;
    const area = Math.PI*radious*radious;
    res.send(`Aria of circle = ${area}`);
});












module.exports = route;