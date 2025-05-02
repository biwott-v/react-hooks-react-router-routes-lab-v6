import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { movies } from "../data";

function Movie() {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === Number(id));

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time} minutes</p>
      <div>
        {movie.genres.map(genre => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </>
  );
}

export default Movie;