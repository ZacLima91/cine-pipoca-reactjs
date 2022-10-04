import "./style.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import api from "../../../api";

const ModalDeleteMovie = (props) => {
  const deleteMovie = async () => {
    const response = await api.delete(`/films/${props.id}`);
    console.log(response.status);
    if (response.status === 200) {
      toast.success("Filme deletado com sucesso!");
      props.handleClick();
    } else {
      toast.error("Erro ao deletar filme!");
      props.handleClick();
    }
  };
  return (
    <>
      <div className="modal-delete-movie">
        <div className="modal-delete-movie-container">
          <div className="modal-delete-movie-header">
            <h3>Deletar Filme</h3>
          </div>
          <div className="modal-delete-movie-body">
            <p>Deseja realmente deletar o filme {props.name}?</p>
          </div>
          <div className="modal-delete-movie-footer">
            <button
              onClick={props.handleClick}
              className="modal-delete-movie-button"
            >
              Cancelar
            </button>
            <Link to="/">
              <button
                onClick={deleteMovie}
                className="modal-delete-movie-button"
              >
                Deletar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalDeleteMovie;
