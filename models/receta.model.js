const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

//const Author = mongoose.model('./author.model.js');

//const ingredient = mongoose.model('ingredientes')

const Schema = mongoose.Schema({
   "_id" :{
       type: types.ObjectId,
       require: true
    },
   "name":{ 
       type: types.String,
       require: true,
       min: 5,
       max: 45
    },
    "ingrediente":[
        {
        type: types.ObjectId,
        ref:"ingredientes",
        require: true
       
    }
    ],
    "tipo":{
        type: types.String,
        require: true,
        min: 4,
        max:25
    },
    "descripcion":{
        type: types.String,
        require: true,
        min: 10,
        max: 150
    },
    "procedimiento":{
        type: types.String,
        require: true,
        min: 10,
        Max: 500

    },
    "fechaCreacion":{
        type: types.String,
        require: true
    
    },
    "tiempoElaboracion":{
        type: types.String,
        require: true

    },
    "temporada":{
        type: types.Boolean,
        default: true,
        require: true

    },
    "isAnonymous":{
        type: types.Boolean,
        require:true,
        default: true
    },

    "author":{
        type: types.String,
        require: ()=>{
            if(this.isAnonymous === true){
                return false
            }else{
                return true;
            }
        }

    },


    
})

module.exports = mongoose.model('Recetas', Schema);