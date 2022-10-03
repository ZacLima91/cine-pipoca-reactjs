import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState, useEffect } from "react";
import api from "../api"
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  const getRateMovies = async () => {
    const response = await api.get("films");
    setMovies(response.data);
  };
  useEffect(() => {
    getRateMovies();
  }, []);

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          CinePipoca
        </Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {}
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
      
    </nav>
  );
};

export default Navbar;
