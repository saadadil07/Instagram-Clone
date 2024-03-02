<<<<<<< HEAD
const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const path = require('path'); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
      const unique = uuidv4(); 
      cb(null, unique + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })
  module.exports = upload; 
=======
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    const fn =
      crypto.randomBytes(16).toString("hex") + path.extname(file.originalname);
    cb(null, fn);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
>>>>>>> 920173667d39b42221dfbc256fe2b1e87fc58ca2
