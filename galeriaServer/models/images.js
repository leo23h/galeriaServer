'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var imageSchema = Schema({
    id: Number,
    name: String,
    image: String,
    creationDate: Date
});

//export the schema
module.exports = mongoose.model('Images', imageSchema);