const receta = require('../models/receta.model');
const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/fooding", {
    useNewUrlParser: true,
    useUnifiedTopology: true, useFindAndModify: false,
})

//CREAR RECETA
exports.addReceta = (req, res)=>{
    const data = {
        "_id": mongoose.Types.ObjectId(),
        "name":req.body.name,
        "ingredientes": req.body.ingredientes, 
        "tipo": req.body.tipo,
        "descripcion": req.body.descripcion,
        "procedimiento": req.body.procedimient,
        "fechaCreacion": req.body.fechaCreacion,
        "tiempoElaboracion": req.body.tiempoElaboracion,
        "temporada": req.body.temporada,
        "isAnonymous": req.body.isAnonymous,
        "author": req.body.author
    }
    const newReceta = new receta(data);
    newReceta.save((error) =>{
        if (error) throw error;
        res.send({"message":"Receta creada con éxito!!!", "_id":data._id})
    })
}

//editar receta PUT
exports.updateReceta = (req, res) => {

    const data = {
        "_id": req.body._id,
        "name":req.body.name,
        "ingredientes": req.body.ingredientes, 
        "tipo": req.body.tipo,
        "descripcion": req.body.descripcion,
        "procedimiento": req.body.procedimient,
        "fechaCreacion": req.body.fechaCreacion,
        "tiempoElaboracion": req.body.tiempoElaboracion,
        "temporada": req.body.temporada,
        "isAnonymous": req.body.isAnonymous,
        "author": req.body.author
    }
    receta.findByIdAndUpdate(
        req.body._id,
        {
            $set: data
        },
        (error, result) => {
            if (error) throw error;
            res.send({ "message": "Receta actualizada actualizada" })
            
        }
    )

    
}
//ELIMINAR RECETA

exports.eliminaReceta = (req, res)=>{
    const id = req.params._id;
    receta.findByIdAndDelete(id, (error, result)=>{
        if(error) throw error
            res.send({"message":"Receta eliminado con éxito!"})

    })
}
//OBTENER RECETA

exports.recetaId = (req, res)=>{
    const id = req.params._id;
    receta.findById(id, (error, result)=>{
        if(error) throw error
            res.send(result)

    })
}

exports.allRecetas = (req, res)=>{
    receta.find((error, receta) => {
        if(error) throw error;
        res.send(receta)
    })
}