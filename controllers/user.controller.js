const user = require('../models/user.model');
const mongoose = require('mongoose');
const bodyController = require('./body.controller');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs')

const absolutePath = path.join('', 'config/secrets.json')
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);

mongoose.connect("mongodb://localhost:27017/fooding", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

exports.register = (req, res) => {
    bodyController.checkBody(res, req.body, [
        "userName",
        "password",
        "email"
    ]);

    user.find({$or:[{
            userName: req.body["userName"]
        }, {
            email: req.body["email"]
        }]},
        (error, result) => {
            if (error) throw error;

            if (result.length !== 0) {
                res.send({
                    "error": "Usuario ya existe."
                });
            } else {
                bcrypt.hash(req.body["password"], 10, (error, hash) => {
                    if (error) throw error;
                    const data = {
                        "_id": mongoose.Types.ObjectId(),
                        "userName": req.body.userName,
                        "password": hash,
                        "email": req.body.email
                    }
                    const newRegister = new user(data);
                    newRegister.save((error) => {
                        if (error) throw error;
                        res.send({
                            "message": "registro  éxitoso!!!",
                            "_id": data._id
                        })
                    })
                })
            }
        })
}
//LOGIN EXPORT
exports.login = (req, res) => {

    user.find({$or:[{
        userName: req.body["userName"]
    }, {
        email: req.body["userName"]
    }]},
        (error, user) => {
            if (error) throw error;
            if(user[0] === undefined){
                res.send({ "error": "usuario o password incorrectos"})
            }else{ 
                bcrypt.compare(
                req.body.password,
                user[0].password,
                (error, coincidence) => {
                    if (error) throw error;
                    if (coincidence === true) {
                        jwt.sign({
                                "userName": user.userName
                            },
                            secrets.jwt_clave,
                            (error, token) => {
                                if (error) throw error;
                                res.cookie("coronavirus", token);
                                res.send({
                                    "succes": "Bienvenido",
                                    "token": token
                                })
                            }
                        )
                    } else {
                        res.send({
                            "error": "usuario o password incorrectos"
                        })
                    }
                }
            )
        }

           


        }


    )

}
exports.checkToken = (req, res, callback) => {

    if (req.cookies["coronavirus"] !== undefined) {

        jwt.verify(
            req.cookies["coronavirus"],
            secrets.jwt_clave,
            (error, verificado) => {
                if (error) throw error;

                if (!verificado) {
                    res.send({
                        "error": "token no valid"
                    })
                    return false;
                } else {
                    callback(req, res)
                    return true;
                }
            }
        )
    } else {
        res.send({
            "error": "unauthenticated user",
            "login": "/login"
        })
        return false;
    }
}
exports.userById = (req, res)=>{
    const id = req.params._id;
    user.findById(id, (error, result)=>{
        if(error) throw error
            res.send(result)

    })
}

exports.allUsuarios = (req, res)=>{
    user.find((error, receta) => {
        if(error) throw error;
        res.send(receta)
    })
}
exports.upDateUser = (req, res)=>{
    const data ={
        "_id": req.body._id,
        "userName": req.body.userName,
        "password": req.body.password,
        "email": req.body.email
     }

     user.findByIdAndUpdate(
        req.body._id,
        {
            $set: data
        },
        (error, result) => {
            if (error) throw error;
            res.send({ "message": "Usuario actualizad@" })
            
        }
     )
}

exports.deleteUser = (req, res)=>{
    const id = req.params._id;
    user.findByIdAndDelete(id, (error, result)=>{
        if(error) throw error
            res.send({"message":"Usuario borrado con éxito!"})

    })
}