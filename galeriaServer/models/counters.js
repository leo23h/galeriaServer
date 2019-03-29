'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var counterSchema = Schema({
    id: String,
    seq: Number
});

//export the schema
module.exports = mongoose.model('counters', counterSchema);