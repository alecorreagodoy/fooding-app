const { config, uploader } = require('cloudinary').v2;

const cloudinaryConfig = (req, res, next) => {
    config({
        "cloud_name": "dcerhjsxd",
        "api_key": "982675844322315",
        "api_secret": "lHv-_VJ6px_lyZVIE5AF5i5FkLk"
    });
    next();
}
module.exports = { cloudinaryConfig, uploader };