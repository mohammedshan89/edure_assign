import React, { useState } from "react";
import axios from 'axios'

const MovieForm = () => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const durationHandler = (e) => {
    setDuration(e.target.value);
  };
  const ratingHandler = (e) => {
    setRating(e.target.value);
    
  };

  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    const moviesData = { name, duration, rating}
    console.log(moviesData);
    try {
      const movies = await axios.post('http://localhost:4040/api/movies/',moviesData)
      console.log(movies)
      if(movies.statusText === "OK"){
        setDuration('')
        setName('')
        setRating('')
      }
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <form className="create" onSubmit={onSubmitHandler}>
      <h3>Add Movie Data</h3>

      <label>Movie Name :</label>
      <input type="text" value={name} onChange={nameHandler} />

      <label>Rating</label>
      <input type="number" value={rating} onChange={ratingHandler} />

      <label>Duration</label>
      <input type="number" value={duration} onChange={durationHandler} />

      <button>Add Movie Data</button>
    </form>
  );
};

export default MovieForm;
