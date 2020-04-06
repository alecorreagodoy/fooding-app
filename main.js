const express = require('express');
const bodyParser = require('body-parser');
const ingredientesController = require('./controllers/ingredientes.controller');
const userController = require('./controllers/user.controller');
const recetaController = require('./controllers/receta.controller');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const { body } = require('express-validator');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');

//server
const server = express();
server.set('port', process.env.PORT || 3003);

//middleware
server.use(cors());
server.use(bodyParser.json());
server.use(express.static('web'));
server.use(cookieParser());
server.use(fileUpload());


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
server.post('/upload', (req, res) =>{
  const storageConfig = multer.diskStorage({
    destination:'./uploads'
});
const upload = multer({"storage": storageConfig}).single('myFile');

upload(req, res, (error) =>{

    if(error) throw error;

    //subire la imagen a cloudinary
    cloudinary.config({
        "cloud_name":"dcerhjsxd",
        "api_key":"982675844322315",
        "api_secret":"lHv-_VJ6px_lyZVIE5AF5i5FkLk"
    })
    
    const filePaht = req.file.path;
    //creo un nombre random que es unico con el momentos
    const fileRandomName = Date.now();

    cloudinary.uploader.upload(
      console.log(file.path),
        filePaht,
        {public_id:`api/${fileRandomName}`,tags:`tuimg`},
        (error, imagen)=>{
            if(error) throw error;
            //Borrar la imagen del servidor unlink

            fs.unlinkSync(filePaht);
            res.send(imagen)
            

        }
        
    )
})
 
    // const storageConfig = multer.diskStorage({
    //     destination:'./uploads'
    // });
    // const upload = multer({"storage": storageConfig}).single(req.files.recetaImage.name);

    // upload(req, res, (error) =>{

    //     if(error) throw error;
    //     //subire la imagen a cloudinary
    //     cloudinary.config({
    //         "cloud_name":"dcerhjsxd",
    //         "api_key":"982675844322315",
    //         "api_secret":"lHv-_VJ6px_lyZVIE5AF5i5FkLk"
    //     })
    //     console.log(req.body)
    //     const filePaht = req.file.path;
    //     //creo un nombre random que es unico con el momentos
    //     const fileRandomName = Date.now();
    //       cloudinary.uploader.upload("my_image.jpg", 
    //       function(error, result) {console.log(result, error)});
    //     cloudinary.uploader.upload(
    //         filePaht,
    //         {public_id:`api/${fileRandomName}`,tags:`tuimg`},
    //         (error, Image)=>{
    //             if(error) throw error;
    //             //Borrar la imagen del servidor unlink
    //             fs.unlinkSync(path.join(__dirname.replace('controllers','')),filePaht),
    //             error =>{
    //               if(error) throw error
    //               const urlImage = Image.url;

    //               const data ={
    //                 "imageUrl": urlImage
    //               }
    //               receta.findByIdAndUpdate(
    //                 id,
    //                 {
    //                   $set: data
    //                 },
    //                 (error, result)=> {
    //                   if(error) throw error;
    //                   res.send({"status":"all right"})
    //                 }
    //               )
    //             }
    //             //res.send(imagen);
    //          }
            
    //     )
    // })
})


//listen
server.listen( server.get("port")
  , ()=>{
    console.log(`servidor esta escuchando en el puerto ${server.get("port")}`)
}) 




