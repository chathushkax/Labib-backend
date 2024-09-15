const express = require("express");
const router = express.Router();
const multer = require("multer");
const imageController = require('../controllers/imageController.js');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/get-image", imageController.getImages);

router.post("/upload-image", upload.single("image"), imageController.uploadImage);

module.exports = router;
