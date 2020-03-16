const express = require('express');
const bodyParser = require('body-parser');
const ingredientesController = require('./controllers/ingredientes.controller');
const userController = require('./controllers/user.controller');
const recetaController = require('./controllers/receta.controller');
//server
const server = express();

//middleware
server.use(bodyParser.json());

//endpoints ingredientes
server.get('/ingrediente/:_id', ingredientesController.ingredienteId);

server.post('/addingrediente', ingredientesController.addIngrediente);

server.put('/editarIngrediente', ingredientesController.updateIngrediente);

server.delete('/eliminaringrediente/:_id', ingredientesController.eliminarIngrediente);


//ENDPOINTS USERS
//register user
server.post('/registrarsusario', userController.register);
//login user
server.post('/login',userController.login);

//ENDPOINTS RECETAS
//obtener receta by id
server.get('/receta/:_id', recetaController.recetaId)
//obtener todas las recetas
server.get('/recetaTodas', recetaController.allRecetas)
//crear recetas
server.post('/crearReceta',recetaController.addReceta );
//editar recetas
server.put('/editaReceta',recetaController.updateReceta);
//eliminar recetas
server.delete('/eliminarReceta/:_id',recetaController.eliminaReceta);


//listen
server.listen(3000, ()=>{
    console.log("servidor esta escuchando en el puerto 3000")
}) 