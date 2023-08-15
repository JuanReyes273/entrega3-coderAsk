import './App.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import CartWidgetComponent from './components/CartWidgetComponent/CartWidgetComponent';
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent';
import ItemDetailContainer from './components/ItemDetailContainerComponent/ItemDetailContainerComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import OrderConfirm from "./components/OrderConfirmComponent/OrderConfirm";
import Checkout from "./components/CheckoutComponent/CheckoutComponent";

function App() {
  return (
    <div className="app">
      <CartContextProvider>
        <BrowserRouter>
          <nav class="navbar">
            <NavBarComponent/>
            {/* <CartWidgetComponent/> */}
          </nav>
          <Routes>
            <Route path="/" element={<ItemListContainerComponent/>}/>
            <Route path="/genero/:generoId" element={<ItemListContainerComponent/>}/>
            <Route path="/pelicula/:peliculaId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}></Route>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/order-confirmation/:id" element={<OrderConfirm/>}/>
            <Route path="*" element={<h1>Page not found: 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
