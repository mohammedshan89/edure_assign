import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetails from "./Components/MovieDetails";
import MovieForm from "./Components/MovieForm"

const Home = () => {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    const fetchMovies = async() => {
      const movies = await axios.get("http://localhost:4040/api/movies")
      setMovies(movies.data)
    }

    fetchMovies()
  },[])
  return (
    <div className="home">
      <div className="workout">
      {movies.map((movie)=>(
        
        <MovieDetails key={movie._id} movie = {movie} />
      ))}
      </div>
      <MovieForm />
    </div>
  );
};

export default Home;
