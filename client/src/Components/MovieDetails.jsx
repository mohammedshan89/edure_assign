
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";


const MovieDetails = ({movie}) => {
  
  

  return (
    <div className="workout-details">
      <h4>{movie.name}</h4>
      <p>
        <strong>Duration : </strong>
        {movie.duration}
      </p>
      <p>
        <strong>Rating : </strong>
        {movie.rating}
      </p>
     

      <span onClick={''}>
         <BsFillTrashFill color="red" />
      </span>
    </div>
  );
};

export default MovieDetails;

