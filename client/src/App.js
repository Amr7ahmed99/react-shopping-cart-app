import './App.css';
import React , {useState}from 'react';
import Footer from './components/Local/footer/Footer';
import Header from './components/Local/header/Header';
import Main from './components/Local/main/Main';
import { Provider } from 'react-redux';
import store from './store/store'; 
import { CartProvider } from './contexts/cartContext';
import { CategoryProvider } from './contexts/categoryContext';

function App() {
  // const [cartItems, setCartItems]= useState( JSON.parse(localStorage.getItem("cartItems"))  || []);
  // const [category, setCategory]= useState("/"); // means get ALL product
  return (
    <Provider store= {store}>
      {/* <CartProvider value={{cartItems, setCartItems}}>
        <CategoryProvider value={{category, setCategory}}> */}
          <div className="layout">
            <Header/>
            <Main/>
            <Footer/>
          </div>
        {/* </CategoryProvider>
      </CartProvider> */}
    </Provider>

  );
}

export default App;
