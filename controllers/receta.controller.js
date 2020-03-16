const receta = require('../models/receta.model');
const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/fooding", {
    useNewUrlParser: true,
    useUnifiedTopology: true, useFindAndModify: false,
})

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

