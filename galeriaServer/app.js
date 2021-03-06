'use strict'
var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var album_routes = require('./routes/album.js');

app.use(bodyParser.urlencoded({ limit: '60mb', extended: true, parameterLimit: 500000 }));

app.use(bodyParser.json({ limit: '60mb' }));

// Add headers
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use('/api', album_routes);



module.exports = app;