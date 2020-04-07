const express = require('express');
const bodyParser = require('body-parser');
const ingredientesController = require('./controllers/ingredientes.controller');
const userController = require('./controllers/user.controller');
const recetaController = require('./controllers/receta.controller');
const { body } = require('express-validator');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const { uploader, cloudinaryConfig } = require('./uploaderHelper/cloudinaryConfig.js');
const { multerUploads, dataUri } = require('./uploaderHelper/multerUpload.js');


//server
const server = express();
server.set('port', process.env.PORT || 3003);

//middleware
server.use(cors());
server.use(express.static('web'));
server.use(cookieParser());
server.use(fileUpload());

server.use(bodyParser.json({limit: '50mb'}));
server.use('*', cloudinaryConfig);



//endpoints ingredientes
server.get('/ingrediente/:_id', 
    // Handle the request somehow
    ingredientesController.ingredienteId
  );


server.get('/todosIngredientes', ingredientesController.getAllIngredients)

server.post('/addIngrediente', ingredientesController.addIngrediente);

server.put('/editarIngrediente', ingredientesController.updateIngrediente);

server.delete('/eliminarIngrediente/:_id', ingredientesController.eliminarIngrediente);


//ENDPOINTS USERS
//register user
server.post('/registrarUsuario', [
  body('userName')
  .isEmpty()
  .withMessage("Name field cannot be empty."),
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage("Enter valid email address."),
    body('password')
      .matches("password2")
      .withMessage("Password dont match.")
      .not().isEmpty()
      .trim()
      .escape(),
   
  ], userController.register);
//login user
server.post('/login',userController.login);

server.get('/todosUsuarios', userController.allUsuarios)

server.get('/usuario/:_id', userController.userById);
//endpoint edit usuario
server.put('/editarUsuario', userController.upDateUser);
//endpoit de delete usuaruio
server.delete('/eliminarUsuario/:_id', userController.deleteUser);



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

server.get('/recetaAutor/author', recetaController.recetaUserAuthor)

//ENDPOINT RECETA INVERSA

server.get('/recetaInversa', recetaController.allRecetasInversas);
server.get('/recetaInversa/:search', recetaController.allRecetasInversas);

//ENDPOINT UPLOAD IMAGEN
server.post('/upload', (req, res) => {
  if (req.files && req.files.image) {
    const file = dataUri(req.files.image.name, req.files.image.data).content;
    uploader.upload(file)
      .then((result) => {
        const image = result.url;
        res.send({
          messge: 'Your image has been uploded successfully to cloudinary',
          data: {
            "image": image
          }
        })
      })
      .catch((err) => res.send({
        messge: 'someting went wrong while processing your request',
        data: {
          err
        }
      }))
  } else {
    res.send({
      messge: 'No file to upload present'
    });
  }
});


//listen
server.listen( server.get("port")
  , ()=>{
    console.log(`servidor esta escuchando en el puerto ${server.get("port")}`)
}) 




