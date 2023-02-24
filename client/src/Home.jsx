import MovieDetails from "./Components/MovieDetails";
import MovieForm from "./Components/MovieForm"

const Home = () => {
  return (
    <div className="home">
      <div className="workout">
        <MovieDetails />
      </div>
      <MovieForm />
    </div>
  );
};

export default Home;
