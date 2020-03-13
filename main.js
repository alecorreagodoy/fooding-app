const express = require('express');
const bodyParser = require('body-parser');
const ingredientesController = require('./controllers/ingredientes.controller');
const userController = require('./controllers/user.controller')

//server
const server = express();

//middleware
server.use(bodyParser.json());

//endpoints ingredientes
server.get('/ingrediente/:_id', ingredientesController.ingredienteId);

server.post('/addingrediente', ingredientesController.addIngrediente);

server.put('/editarIngrediente', ingredientesController.updateIngrediente);

server.delete('/eliminaringrediente/:_id', ingredientesController.eliminarIngrediente)

//ENDPOINTS USERS

server.post('/registrarsusario', userController.register);

server.post('/login',userController.login);



//listen
server.listen(3000, ()=>{
    console.log("servidor esta escuchando en el puerto 3000")
}) 