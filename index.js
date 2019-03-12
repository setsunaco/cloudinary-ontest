var cloudinary = require('cloudinary')
cloudinary.uploader.upload("unUpload.png",
function(result) { console.log(result) })
