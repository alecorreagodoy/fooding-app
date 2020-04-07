const multer = require('multer');
const Datauri = require('datauri');
const path = require('path');

const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('image');
const dUri = new Datauri();

function dataUri(req) {
    return dUri.format(path.extname(req.files.image.name).toString(), req.files.image.data);
}
module.exports = { multerUploads, dataUri };