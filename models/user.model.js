const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const Schema = mongoose.Schema({
    "_id": {
        type: types.ObjectId,
        require: true
    },
    "userName":{
        type: types.String,
        require: true,
        min: 3,
        max: 50
    },
    "firstName":{
        type: types.String,
        require: true
    },
    "lastName":{
        type: types.String,
        require: true
    },
    "password":{
        type: types.String,
        require: true
    },
    "birthDate":{
        type: types.String,
        require: true
    },
    "email":{
        type: types.String,
        require: true,
        min:5,
        max: 255

    },
    "city":{
        type: types.String,
        require: false
    }
})

module.exports = mongoose.model('usuario', Schema)

