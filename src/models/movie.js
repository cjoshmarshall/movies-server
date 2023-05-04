const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: { type: String },
  rating: { type: Number, min: 0, max: 5 },
  releasedDate: { type: String },
});

const movieModel = mongoose.model("Movie", movieSchema);
module.exports = movieModel;
