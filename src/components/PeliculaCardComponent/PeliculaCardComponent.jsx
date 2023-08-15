import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./peliculaCard.css";

function PeliculaCardComponent(props) {
  const { id, nombre, img, precio, descripcion, genero, anioPublicacion } = props;

  return (
    <div className="pelicula-card">
      <div className="pelicula-card_img">
        <img src={img} alt="imagen"></img>
      </div>
      <div className="pelicula-card_nombre">
        <h2>{nombre}</h2>
        <h5>{genero}</h5>
        <small>{anioPublicacion}</small>
      </div>
      <div className="item-card_detail">
        <h3>$ {precio}</h3>
      </div>
      <Link to={`/pelicula/${id}`}>
        <ButtonComponent>Ver Pelicula</ButtonComponent>
      </Link>
    </div>
  );
}

export default PeliculaCardComponent;