import "./itemListContainer.css";
import { useState, useEffect } from "react";
// import getPeliculas, { getGeneroPelicula } from "../../services/asyncMock";
import { getPeliculas, getGeneroPelicula } from "../../services/firebase";

import PeliculaCardComponent from "../PeliculaCardComponent/PeliculaCardComponent";
import { useParams } from "react-router-dom";
import { Waveform } from '@uiball/loaders'


function ItemListContainerComponent() {
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { generoId } = useParams();
  
  
  useEffect(() => {
    console.log("generoId:", generoId);
    setIsLoading(true);
    async function requestPeliculas() {
      let respuesta = generoId
        ? await getGeneroPelicula(generoId)
        : await getPeliculas();
      setPeliculas(respuesta);
      setIsLoading(false);
    }
    
    requestPeliculas();
  }, [generoId]);

  if (isLoading) {
    return <Waveform size={40} lineWeight={3.5} speed={1} color="black"/>
  }

  return (
    <div>
      <h1 className="titulo">Listado de Peliculas</h1>
      <div className="flex-container">
        {peliculas.map((pelicula) => (
          <PeliculaCardComponent key={pelicula.id} {...pelicula} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainerComponent;