const express = require('express');
const route = express.Router();

route.get('/triangle',(req,res)=>{
    res.sendFile(process.cwd()+"/views/triangle.html");
});

route.post('/triangle',(req,res)=>{
    // const hight = req.body.hight;
    // const base = req.body.base;
    const {hight,base} = req.body;

    const area = 0.5*base*hight;
    res.send(`The area of Triangle is : ${area}`);
});















module.exports = route;