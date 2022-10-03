import { Link } from "react-router-dom";

import { FaCalendarAlt } from "react-icons/fa";

const MovieCard = (props, { showLink = true }) => {
  const movie = props.movie;
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt={movie.name} />
      <h2>{movie.name}</h2>
      <p>
        <FaCalendarAlt /> {movie.year}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
