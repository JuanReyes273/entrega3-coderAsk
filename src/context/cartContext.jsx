import { useState, createContext } from "react";

const cartContext = createContext({ cart: [] });

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(pelicula, count) {
    const newCart = [...cart];
    if (isInCart(pelicula.id)) {
      const indexUpdate = cart.findIndex((item) => item.id === pelicula.id);
      newCart[indexUpdate].count += count;
      setCart(newCart);
    } else {
      const newItemInCart = { ...pelicula, count };
      newCart.push(newItemInCart);
      setCart(newCart);
    }
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotaPriceInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count * item.precio;
    });
    return total;
  }

  function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function getItemInCart(id) {
    return cart.find((item) => item.id === id);
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
        getItemInCart,
        getTotaPriceInCart
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };
