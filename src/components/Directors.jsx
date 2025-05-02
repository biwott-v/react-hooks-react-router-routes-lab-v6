import NavBar from "./NavBar";
import { directors } from "../data";

function Directors() {
  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={`${director.name}-${movie}-${index}`}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Directors;