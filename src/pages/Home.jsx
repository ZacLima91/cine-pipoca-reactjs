import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { BiPlusCircle } from "react-icons/bi";
import ModalNewMovie from "../components/modals/CreateModalMovie";
import { toast } from "react-toastify";
import api from "../api";
import "./MoviesGrid.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    toast("fjdskfjsdkl")
    setOpen(!open);
  };

  const getRateMovies = async () => {
    const response = await api.get("films");
    setMovies(response.data);
  };

  useEffect(() => {
    getRateMovies();
  }, []);

  return (
    <div className="container">
      <div className="icon-add">
        <BiPlusCircle onClick={handleClick} />
      </div>

      <h2 className="title">Filmes:</h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} getMovies={getRateMovies} />)}
      </div>
      {open && <ModalNewMovie getMovies={getRateMovies} handleClose={handleClick} />}
    </div>
  );
};

export default Home;
