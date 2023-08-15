import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";
import "./orderConfirm.css";

function OrderConfirm() {
  const [orderData, setOrderData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      console.log(order);
      setOrderData(order);
    });
  }, []);

  return (
    <div className="purchase-summary">
      <h1 className="purchase-title">Gracias por tu compra! </h1>
      {orderData !== null ? (
        <div className="purchase-details">
          <p className="purchase-text">
            Tus productos comprados:
            {orderData.items.map((item) => {
              return (
                <small  className="purchase-item">
                  {item.nombre} - {item.count} unidades
                </small>
              );
            })}
          </p>
        </div>
      ) : (
        <p className="purchase-loading">Cargando</p>
      )}
    </div>
  );
}

export default OrderConfirm;