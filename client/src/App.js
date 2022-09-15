import './App.css';
import React , {useState}from 'react';
import Footer from './components/Local/footer/Footer';
import Header from './components/Local/header/Header';
import { Provider } from 'react-redux';
import store from './store/store'; 
import { CartProvider } from './contexts/cartContext';
import { CategoryProvider } from './contexts/categoryContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Global/navbar/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';

function App() {
  // const [cartItems, setCartItems]= useState( JSON.parse(localStorage.getItem("cartItems"))  || []);
  // const [category, setCategory]= useState("/"); // means get ALL product
  return (
      <Router>
        <Provider store= {store}>
            <div className="layout">
              <Header/>
              <Navbar />
              <Routes>
                <Route path='/' element= { <Home />} exact/>
                <Route path='/orders' element= { <Orders/> } exact />
              </Routes>
              <Footer/>
            </div>
        </Provider>
      </Router>



  );
}

export default App;
