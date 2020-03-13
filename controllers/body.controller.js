exports.checkBody = (res, body, arrayValores) =>{
    for(const valor of  arrayValores){
        if(body[valor] === undefined || body[valor] ==="" || body[valor] === null){
            res.status(400).send({"error":"Revisa tu body "+ body[valor]})
            throw new Error(" body mal formado " + body[valor])
        }

    }
}