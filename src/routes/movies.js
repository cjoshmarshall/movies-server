const express = require("express");
const Movie = require("../models/movie");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find({});
    if (movies) {
      res.status(200).json(movies);
    } else {
      res.status(404).send("Movies Not Found");
    }
  } catch (err) {
    res.status(500).send("Something Went Wrong. Try Again Later.");
  }
});

router.post("/", async (req, res) => {
  try {
    if (newMovie) {
      const newMovie = new Movie(req.body);
      const saveMovie = await newMovie.save();
      res.status(200).send("Movie Created Successfully");
    } else {
      res.status(401).send("Values are Empty");
    }
  } catch (err) {
    res.status(500).send("Something Went Wrong. Try Again Later.");
  }
});

module.exports = router;
