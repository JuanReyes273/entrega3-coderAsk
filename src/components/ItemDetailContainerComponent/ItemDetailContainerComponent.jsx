import "./itemDetailContainer.css";
import { useState, useEffect, useContext } from "react";
// import { getPeliculaData } from "../../services/asyncMock";
import { useParams, Link } from "react-router-dom";
import ItemCountComponent from "../ItemCountComponent/ItemCountComponent";
import { cartContext } from "../../context/cartContext";
import { getPeliculaData } from "../../services/firebase";

function ItemDetailContainer() {
    const [pelicula, setPelicula] = useState({})
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const { peliculaId } = useParams();

    const { addToCart, getItemInCart } = useContext(cartContext);

    const itemInCart = getItemInCart(peliculaId);

    const maxItems = itemInCart
    ? pelicula.stock - itemInCart.count
    : pelicula.stock;

    async function requestPelicula() {
        const respuesta = await getPeliculaData(peliculaId);
        setPelicula(respuesta)
    }

    useEffect(() => {
        requestPelicula()
    },[peliculaId]);

    function handleAddToCart(clickCount) {
        addToCart(pelicula, clickCount);
        alert(`Pelicula agregado al carrito, cantidad: ${clickCount}`);
        setIsAddedToCart(true);
    }

    return (
        <div class="pelicula-card">
            <img src={pelicula.img}></img>
            <h2>{pelicula.nombre}</h2>
            <p>{pelicula.descripcion}</p>
            <div class="precio-container">
                {pelicula.stock > 0 ? ( 
                    isAddedToCart ? (<button class="btn-add"><Link to="/cart">Ir al carrito</Link></button>) 
                        : (<ItemCountComponent stock={maxItems} onConfirm={handleAddToCart}/>)
                            ) : (<p>No hay stock disponible</p>)
                }
                {itemInCart && (
                <h3>Ya agregaste {itemInCart.count} unidades de esta pelicula</h3>
                )}
            </div>
            <span class="precio">$ {pelicula.precio}</span>
        </div>
    );
}

export default ItemDetailContainer;



