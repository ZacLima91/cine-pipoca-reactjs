import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../../api";

const ModalNewMovie = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async () => {
    const newMovie = {
      name,
      description,
      year,
      imageUrl,
    };


    newMovie.year = parseInt(newMovie.year);

    console.log(newMovie);

    const response = await api.post("films", newMovie);

    console.log(response);

    if (response.status !== 201) {
      return toast.error("Erro ao adicionar filme!");
    }

    toast.success("Filme adicionado com sucesso!");

    props.handleClose();
    props.getMovies();
  };
  return (
    <div className="modal-new-movie">
      <div className="modal-new-movie-header">
        <div className="modal-new-movie-header-title">
          <h3>Novo Filme</h3>
          <button onClick={props.handleClose}>X</button>
        </div>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="name"
          type="text"
          placeholder="Nome do Filme"
        />
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          name="description"
          type="text"
          placeholder="Descrição"
        />
        <input
          value={year}
          onChange={(event) => setYear(event.target.value)}
          name="year"
          type="number"
          placeholder="Ano do filme"
        />
        <input
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          name="imageUrl"
          type="text"
          placeholder="URL da Imagem do Produto"
        />
        <button onClick={handleSubmit}>Adicionar</button>
      </div>
    </div>
  );
};

export default ModalNewMovie;
