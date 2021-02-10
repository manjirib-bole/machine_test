const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
const connection = require('./connection');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//app.use(express.static(path.join(__dirname)));

app.use(express.static(__dirname + '/public'));
app.use('/api/',routes);




app.get('/',(req,res)=>{
    res.send("Welcome to Machine test");
})
const port = 4000;
app.listen(port);

