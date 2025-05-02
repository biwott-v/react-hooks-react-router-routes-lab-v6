import NavBar from "./NavBar";
import { actors } from "../data";

function Actors() {
  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={`${actor.name}-${movie}-${index}`}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Actors;