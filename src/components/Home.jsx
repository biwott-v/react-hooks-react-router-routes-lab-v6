import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { movies } from "../data";

function Home() {
  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
        </div>
      ))}
    </>
  );
}

export default Home;