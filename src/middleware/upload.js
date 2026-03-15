const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    const namaFile = Date.now() + path.extname(file.originalname);
    cb(null, namaFile);
  }

});

const upload = multer({ storage });

module.exports = upload;