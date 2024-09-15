const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  }
});

// module.exports = mongoose.model("ImageDetails", imageSchema);
const Images = mongoose.model("Images", imageSchema);

module.exports = Images;