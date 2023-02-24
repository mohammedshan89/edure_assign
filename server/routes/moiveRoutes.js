const express  = require('express');
const { createMoviedata, getMovies } = require('../controller/movieController');


const router = express.Router();

router.get("/",getMovies)
router.post("/",createMoviedata)

module.exports = router