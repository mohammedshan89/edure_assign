import React from "react";

const MovieForm = () => {
  return (
    <form className="create" onSubmit={""}>
      <h3>Add Movie Data</h3>

      <label>Movie Name :</label>
      <input type="text" value={""} onChange={""} />

      <label>Rating</label>
      <input type="number" value={""} onChange={""} />

      <label>Duration</label>
      <input type="number" value={""} onChange={""} />

      <button>Add Movie Data</button>
    </form>
  );
};

export default MovieForm;
