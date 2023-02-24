const Movies = require("../model/movieModel");



const createMoviedata = async (req, res) => {
  const { name, duration,rating } = req.body;
  try {
    const movieData = await Movies.create({ name, duration, rating });
    res.status(200).json({ movieData, message: "movies data Created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find().sort({ createdAt: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getMovies, createMoviedata
}