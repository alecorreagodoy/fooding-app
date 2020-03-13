const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const Schema = mongoose.Schema({

    "_id":{
        type: types.ObjectId,
        require: true
    },
    "nombre":{
   
        type: types.String,
        require: true

    },
    "tipo":{
        type: types.String,
        require: true


    }
})
module.exports = mongoose.model('ingredientes', Schema)
