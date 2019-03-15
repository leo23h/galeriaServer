'use strict'

var mongoose = require('mongoose');

var app = require('./app');

var port = 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/ImageGallery')
    .then(() => {

        console.log("La conexión a la base de datos se ha realizado correctamente")

        app.listen(port, () => {
            console.log("servidor corriendo en http://localhost:3000");
        });
    })

    .catch(err => console.log(err));

