const ingrediente = require('../models/ingredientes.model');
const mongoose = require('mongoose');
 require('../dataBase/dataBase.js')




//añadir ingredientes
exports.addIngrediente = (req, res)=>{
    const data = {
        "_id": mongoose.Types.ObjectId(),
        "nombre": req.body.nombre,
        "tipo": req.body.tipo
    }
    const newIngrediente = new ingrediente(data);
    newIngrediente.save((error) =>{
        if (error) throw error;
        res.send({"message":"ingrediente agregado con profundo éxito!!!", "_id":data._id})
    })

}

exports.ingredienteId = (req, res)=>{
    const id = req.params._id;
    ingrediente.findById(id, (error, result)=>{
        if(error) throw error
            res.send(result)

    })
}

exports.getAllIngredients = (req, res)=>{
    ingrediente.find((error, result)=>{
        if(error) throw error;
        res.send(result)
    })
}

exports.updateIngrediente = (req, res) => {

    const data = {
        "_id": req.body._id,
       "nombre": req.body.nombre,
       "tipo": req.body.tipo
    }
    ingrediente.findByIdAndUpdate(
        req.body._id,
        {
            $set: data
        },
        (error, result) => {
            if (error) throw error;
            res.send({ "message": "Ok ingrediente actualizada" })
            
        }
    )

    
}

exports.eliminarIngrediente = (req, res)=>{
    const id = req.params._id;
    ingrediente.findByIdAndDelete(id, (error, result)=>{
        if(error) throw error
            res.send({"message":"Ingrediente eliminado con éxito!"})

    })
}
