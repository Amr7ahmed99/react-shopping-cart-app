import React, { useState, useEffect } from 'react';
import '../../../css/main/Main.css';
import { words } from '../../../words';
import Products from '../products/Products';
import Filter from '../filter/Filter';
import axios from 'axios';
import axiosInstance from '../../Global/axiosConfig/axiosConfig';
import Cart from '../cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import changeProducts from '../../../store/action';
// import data from '../../../data.json';

export default function Main() {
  const [productModal, setProductModal]= useState("");
  // const [products, setProducts]= useState([]);
  const [category, setCategory]= useState("/"); // means get ALL product
  const [rate, setRate]= useState(""); // means get ALL product
  const [cartItems, setCartItems]= useState( JSON.parse(localStorage.getItem("cartItems"))  || []);
  
  const dispatch= useDispatch();
  const products= useSelector( (state)=> state.products);
  useEffect(()=>{
    dispatch(changeProducts(category));
    // axiosInstance
    // .get(`${category}`)
    // .then( (res)=> { setProducts(res.data)})
    // .catch((err)=> Promise.reject(err));
    
  }, [category]);

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const openModal= (product)=>{
      setProductModal(product);
  }

  const closeModal= ()=>{
      setProductModal(false);
  }

  const changeCategory= (ev)=>{
    setCategory( ev.target.value === "All"?"/":`/category/${ev.target.value}`);
    setRate("");
  }

  const sortingByRate= (ev)=>{
    // const newSort= [...products];
    // setRate(ev.target.value);
    // newSort.sort( 
    //   (a,b)=> ev.target.value == "Low"? a.rating.rate - b.rating.rate: b.rating.rate - a.rating.rate
    //   );
    // setProducts(newSort);
  }

  const addToCart= (newItem)=>{
    const cartItemsClone= [...cartItems];
    var isExist= false;
    cartItemsClone.forEach( item=> {
      if(newItem.id === item.id){
        item.quantity++;
        isExist= true;
      }
    });

    if(!isExist){
      cartItemsClone.push({...newItem, quantity: 1});
    }
    setCartItems(cartItemsClone);
  }

  const removeFromCart= (itemId)=>{
    const cartItemsClone= [...cartItems];
    setCartItems(cartItemsClone.filter( item=> (item.id !== itemId)));
  }
  return (
    <main>
      <div className='row-products-filter'>
        <Filter numOfProducts= {2} category= {category} rate= {rate} changeCategory= {changeCategory} sortingByRate= {sortingByRate}/>
        <Products products= {products} productModal= {productModal} openModal= {openModal} closeModal= {closeModal} addToCart= {addToCart}/>
      </div>
      <div className='row-cart'>
        <Cart cartItems= {cartItems} removeFromCart= {removeFromCart}/>
      </div>
    </main>
  )
}
