'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
var album = require('../models/album');
// Llamamos al router
var api = express.Router();


api.get('/', function(req, res) {

});

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/album/:1', function(req, res) {

});

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.post('/album', function(req, res) {
    //insert to album
    var alb = new album({
        name: req.body.name,
        images: []
    });

    alb.save().then((data) => {
            res.json({
                status: "success",
                message: 'New Album created!',
                data: data
            });
        })
        .catch((err) => {
            console.log(err);
            res.json({
                status: "error",
                message: 'error to create album',
            });
        })
});

// route for get all albums
api.get('/album', function(req, res) {

    album.find().then((data) => {
            res.json({ data });
        })
        .catch((err) => {
            console.log(err);
            res.json({
                status: "error",
                message: 'error to find album',
            });
        })
});

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/album/:id', function(req, res) {
    album.findById(req.params._id).then((data) => {
            console.log("obtener album", data);
            res.json({ data });
        })
        .catch((err) => {
            console.log(err);
            res.json({
                status: "error",
                message: 'error to find album',
            });
        })
});


// Exportamos la configuración
module.exports = api;