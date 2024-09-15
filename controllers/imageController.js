const Images = require('../models/UploadeImageModel');

exports.getImages = async (req, res) => {
  try {
    const images = await Images.find({});
    res.send({ status: "ok", data: images });
  } catch (error) {
    res.json({ status: error });
  }
};

exports.uploadImage = async (req, res) => {
  try {
    const imageName = req.file.filename;
    await Images.create({ image: imageName });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
};
