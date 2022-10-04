import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import api from "../api";

import MovieCard from "../components/MovieCard";
import ModalDeleteMovie from "../components/modals/DeleteModalMovie";

import "./Movie.css";
import ModalEditMovie from "../components/modals/EditModalMovie";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleShowEdit = () => {
    setOpenEditModal(!openEditModal);
  }
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleShowDelete = () => {
    setOpenDeleteModal(!openDeleteModal);
  }
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const getMovies = async () => {
    const response = await api.get("films");
    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getMovie = async (url) => {
    const response = await api.get(`films/${id}`);
    setMovie(response.data);
  };

  useEffect(() => {
    const movieUrl = `${api}${id}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.name}</p>
          <div className="info">
            <h3>
              <BiDetail />
              Descrição:
            </h3>
            <p>{movie.description}</p>
          </div>

          <div className="buttons">
            <button className="button-edition" onClick={handleShowEdit}>Editar</button>
            <button className="button-delete" onClick={handleShowDelete}>Deletar</button>
          </div>
        </>
      )}
      {openEditModal && (<ModalEditMovie getMovie={getMovie} name={movie.name} description={movie.description} year={movie.year} imageUrl={movie.imageUrl} id={movie.id} handleClick={handleShowEdit} />) }
      {openDeleteModal && (<ModalDeleteMovie getMovies={getMovies} name={movie.name} id={movie.id} handleClick={handleShowDelete} />)}
      {<ToastContainer />}
    </div>
  );
};

export default Movie;
