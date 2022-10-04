import "./style.css";
import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import api from "../../../api";

const ModalEditMovie = (props) => {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [year, setYear] = useState(props.year);
  const [imageUrl, setImageUrl] = useState(props.imageUrl);

  const handleSubmit = async () => {
    const editedMovie = {
      name: name,
      description: description,
      year: year,
      imageUrl: imageUrl,
    };
    editedMovie.year = parseInt(editedMovie.year);
    const response = await api
      .patch(`films/${props.id}`, editedMovie)
      .catch((error) => {
        console.log(error);
        return error;
      });
    console.log(response);

    if (response.status === 200) {
      props.getMovie();
      props.handleClick();
      return toast.success("Filme atualizado com sucesso");
    } else {
      props.handleClick();
      return toast.error("Erro ao editar produto!");
    }
  };
  return (
    <div className="modal-edit">
      <div className="modal-edit-container">
        <div className="modal-edit-header">
          <h3>
            Editar Filme<br></br> {props.name}
          </h3>
          <button onClick={props.handleClick} className="modal-edit-button">
            X
          </button>
        </div>
        <div className="modal-edit-body">
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
            placeholder="Descrição do Filme"
          />
          <input
            value={year}
            onChange={(event) => setYear(event.target.value)}
            name="year"
            type="number"
            placeholder="Ano do Filme"
          />
          <input
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            name="imageUrl"
            type="text"
            placeholder="URL da Capa do Filme"
          />
          <button onClick={handleSubmit}>Editar</button>
        </div>
      </div>
    </div>
  );
};
export default ModalEditMovie;
