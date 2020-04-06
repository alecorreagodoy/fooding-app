const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose')


const absolutePath = path.join('', 'config/secrets.json');
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);

mongoose.connect(secrets['connection-string'], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})


module.exports = mongoose
