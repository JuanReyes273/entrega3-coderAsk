import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { useContext, useState } from "react";
import "./checkout.css";

function Checkout() {
  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const navigate = useNavigate();
  const { cart, getTotaPriceInCart } = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: getTotaPriceInCart(),
    };

    try {
      const idOrder = await createOrder(orderData);
      console.log(`Gracias por tu compra, tu numero de orden es ${idOrder}`); 
      navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }
  }

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      age: "",
    });
  }

  return (
    <form className="checkout-form">
      <h2 className="form-title">Completa tus datos para completar la compra</h2>

      <div className="form-field">
        <label htmlFor="lastname" style={{ width: "100px", marginRight: 4 }}>
          Nombre
        </label>
        <input
          value={buyer.firstname}
          name="firstname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="lastname" style={{ width: "100px", marginRight: 4 }}>
          Apellido
        </label>
        <input
          value={buyer.lastname}
          name="lastname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div className="form-field">
        <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
        <input
          value={buyer.age}
          name="age"
          type="number"
          onChange={onInputChange}
        />
      </div>

      <button
        className="form-button" disabled={
          !(buyer.firstname !== "" && buyer.lastname !== "" && buyer.age !== "")
        }
        onClick={handleCheckout}
      >
        Confirmar Compra
      </button>
      <button className="form-button" onClick={resetForm}>Cancelar</button>
    </form>
  );
}

export default Checkout;