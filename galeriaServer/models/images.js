'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var imageSchema = Schema({
    _id: Number,
    name: String,
    image: String,
    creationDate: Date
});

//export the schema
module.exports = mongoose.model('Images', imageSchema);