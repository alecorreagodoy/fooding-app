const receta = require('../models/receta.model');
const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/fooding", {
    useNewUrlParser: true,
    useUnifiedTopology: true, useFindAndModify: false,
})

//CREAR RECETA
exports.addReceta = (req, res)=>{
    //console.log(req.body)
    const data = {
        "_id": mongoose.Types.ObjectId(),
        "name":req.body.name,
        "ingredientes": req.body.ingredientes, 
        "tipo": req.body.tipo,
        "descripcion": req.body.descripcion,
        "procedimiento": req.body.procedimiento,
        "fechaCreacion": req.body.fechaCreacion,
        "tiempoElaboracion": req.body.tiempoElaboracion,
        "temporada": req.body.temporada,
        "isAnonymous": req.body.isAnonymous,
        "author": req.body.author
    }
    const newReceta = new receta(data);
    newReceta.save((error,result) =>{
        if (error) throw error;
        res.send({"message":"Receta creada con éxito!!!", "_id":result._id})
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
        "procedimiento": req.body.procedimiento,
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
    //busqueda en bd //find 86 parametro where 87 param select null pora q traigatodo, 88 recibe {} con opciones de busq,skip dice cuantos objetos se va asltear,limit tamanyo de pagina
    receta.find( 
        { name: new RegExp(req.body.search , "i")}, 
        null,
        { skip: req.body.pageSize*req.body.currentPage, order: {name:1} , limit: req.body.pageSize  }

    ) 
    //populate completa campos ref:ingredientes
    //.populate({path:"ingredientes"})
    .exec(
        (error, receta) => {

        if(error) throw error;
        res.send(receta)})
}

//Devuelve recetas by ingredientes
exports.allRecetasInversas = (req, res)=>{
    // receta.find( 
    //     null,//trae todos las recetas
    //     {"_id":1, "ingredientes":1},//solo el campo id e ingredientes
    //     { order: {name:1}  }

    // ) 
    // .populate({path:"ingredientes", match : {"nombre": new RegExp(req.body.search , "i") }})
    // .exec(
    //     (error, recetas) => {

    //     if(error) throw error;
        
    //     const recetasEncontradas = recetas.filter((r)=>{ //busca las recetas que tenga ingredientes, satisfacen el mach de 108
    //         return r.ingredientes.length > 0; 
    //     })

    //    receta.find(
    //        //where busca todas la recetas las q tengan el id q estan en recetasEctradas //map para un {} para otro {} 
    //        {"_id":{$in:recetasEncontradas.map(receta=>receta['_id'])}},
    //    (error, receta) => {

    //     if(error) throw error;
    //     res.send(receta)}
    //    ).populate({path:"ingredientes"})
    // })
    receta.find( 
        { $or: [{name: new RegExp(req.body.search , "i")},{ingredientes: new RegExp(req.body.search , "i")}]}, 
        null,
        { skip: req.body.pageSize*req.body.currentPage, order: {name:1} , limit: req.body.pageSize  }

    ) 
    
    .exec(
        (error, receta) => {

        if(error) throw error;
        res.send(receta)})


}
exports.recetaUserAuthor = (req, res)=>{
     console.log(req.cookies)
    receta.find( 
        { author: req.cookies['un']}, 
        null

    ) 
   
    .exec(
        (error, receta) => {

        if(error) throw error;
        res.send(receta)})

}