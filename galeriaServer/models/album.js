'use strict'

var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

var Schema = mongoose.Schema;

var AlbumSchema = Schema({
    _id: Number,
    name: { type: String, required: true },
    creationDate: { type: Date, required: true },
    images: []
}, { _id: false });

//autoincrement plugin
AlbumSchema.plugin(AutoIncrement);
//export the schema
module.exports = mongoose.model('Album', AlbumSchema);