const express = require('express');
const circleRoute = require('./routes/route.circle')
const triangleRoute = require('./routes/route.triangle')
const app = express();
var bodyParser = require('body-parser')
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
});

app.use('/api',circleRoute);
app.use('/api',triangleRoute);

app.use((req,res)=>{
   res.send("<h1>401 page not found!!!</h1>");
});

module.exports = app;