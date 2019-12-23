const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// setup express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/eventsdb');
mongoose.Promise = global.Promise;

// initialize routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

app.get('/', function(){
    console.log('GET Req.');
});

// listen for request
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});