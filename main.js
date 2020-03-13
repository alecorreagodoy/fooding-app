const express = require('express');
const bodyParser = require('body-parser');
const ingredientesController = require('./controllers/ingredientes.controller')

//server
const server = express();

//middleware
server.use(bodyParser.json());

//endpoints
server.get('/ingrediente/:_id', ingredientesController.ingredienteId);
server.post('/addingrediente', ingredientesController.addIngrediente);
server.put('/editarIngrediente', ingredientesController.updateIngrediente);
server.delete('/eliminaringrediente/:_id', ingredientesController.eliminarIngrediente)



//listen
server.listen(3000, ()=>{
    console.log("servidor esta escuchando en el puerto 3000")
}) 