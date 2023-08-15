import "./cartWidget.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidgetComponent() {
    const context = useContext(cartContext);
    console.log(context);

    return (
        <Link to="/cart">
        <div class="navbar-cart">
            <span class="cart-icon">🛒</span>
            <span class="cart-count">{context.getTotalItemsInCart()}</span>
        </div>
        </Link>
    );
}

export default CartWidgetComponent;