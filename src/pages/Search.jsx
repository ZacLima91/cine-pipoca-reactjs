import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import api from "../api";

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchesMovies = async (url) => {
    const response = await api.get("films");
    setMovies(response.data);
  };

  useEffect(() => {
    const searcWithQueryUrl = `?fdfs&query=${query}`;
    getSearchesMovies(searcWithQueryUrl);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies
            .filter((val) => {
              if (query == "") {
                return val;
              } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
                return val;
              }
            })
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
