'use strict'
// Cargamos el módulo de express para poder crear rutas

var express = require('express');
var mongoose = require('mongoose');
var album = require('../models/album');
var image = require('../models/images');
var imageCounter = require('../models/counters');

// call the router
var api = express.Router();

// creation route for save album
api.post('/album', function(req, res) {
    //initialize date
    var date = new Date();
    //initialize album object
    var alb = new album();
    // creation variables
    alb.name = req.body.name;
    alb.creationDate = date;
    alb.images = [];
    //query
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

// find album by id
api.get('/album/:id', function(req, res) {
    album.findById(req.params.id).then((data) => {
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

// creation route for save image by album
api.post('/album/image/', function(req, res) {
    //initialize array temp
    var arrayTemp = [];
    //initialize date
    var date = new Date();
    //initialize album object
    var img = new image();
    // creation variables
    img.name = req.body.name;
    img.image = req.body.image;
    img.creationDate = date;
    // get the sequence
    imageCounter.findOneAndUpdate({ "id": "imageId" }, { $inc: { "seq": 1 } })
        .then((dataSeq) => {
            //assign the sequence
            img._id = dataSeq.seq;
            // query
            // search album
            album.findById(req.body.idAlbum).then((data) => {
                //assing array images to array temp
                arrayTemp = data.images;
                //add new image in a array
                arrayTemp.push(img);
                // query for search an update images
                album.findByIdAndUpdate(req.body.idAlbum, { images: arrayTemp }).then((data) => {
                        res.json({
                            status: "success",
                            message: 'New image added!'
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.json({
                            status: "error",
                            message: 'error to create album',
                        });
                    })
            }).catch((err) => {
                console.log(err);
                res.json({
                    status: "error",
                    message: 'error to find album',
                });
            })
        })
        .catch((err) => {
            console.log(err);
            res.json({
                status: "error",
                message: 'error to generate sequence',
            });
        })
});

// route for find the image with album ID
api.get('/albums/images/:id', function(req, res) {
    //convert parameter of string to int
    var id = parseInt(req.params.id);
    album.find({ "images._id": id }, { "images.$": 1 }).then((data) => {
            res.json({ data });
        })
        .catch((err) => {
            console.log(err);
            res.json({
                status: "error",
                message: 'error to find image',
            });
        })
});

// route for get all images
api.get('/album/images/all', function(req, res) {
    var arrayTemp = [];
    album.find().then((data) => {
        //loop for albums
        data.forEach(albums => {
            //loop for images
            albums.images.forEach(images => {
                //create new array images
                arrayTemp.push({ idAlbum: albums._id, pictureName: images.name, pictureId: images._id, picture: images.image })
            });
        });
        //send the response
        res.json(arrayTemp);
    }).catch((err) => {
        console.log(err);
        res.json({
            status: "error",
            message: 'error to find pictures',
        });
    })
});

// route for delete a image of album
api.delete('/album/image/:idAlbum/:idImage', function(req, res) {
    var arrayTemp = [];
    var idAlb = parseInt(req.params.idAlbum);
    //find the album
    album.findById({ "_id": idAlb }).then((data) => {
        //convert string to ObjectId the parameter
        var id1 = parseInt(req.params.idImage);
        //loop in the array the images
        data.images.forEach(image => {
            //convert String to ObjectId id images in DB
            var id2 = parseInt(image._id);
            //compare id image in db with the parameter if are not equals
            if (id2 !== id1) {
                //add in new array temp
                arrayTemp.push(image)
            }
        });

        //query for search an update images
        album.findByIdAndUpdate(req.params.idAlbum, { images: arrayTemp }).then((data) => {
                res.json({
                    status: "success",
                    message: 'Image deleted!'
                });
            })
            .catch((err) => {
                console.log(err);
                res.json({
                    status: "error",
                    message: 'error to delete image',
                });
            })

    }).catch((err) => {
        console.log(err);
        res.json({
            status: "error",
            message: 'error to find image',
        });
    })
});

// route for find the image with album ID
api.get('/album/image/name/:name', function(req, res) {
    //asign to variable the parameter
    var name = req.params.name;
    album.find({ "images.name": /name/i }).then((data) => {
            res.json({ data });
        })
        .catch((err) => {
            console.log(err);
            res.json({
                status: "error",
                message: 'error to find image',
            });
        })
});

// configuration export
module.exports = api;