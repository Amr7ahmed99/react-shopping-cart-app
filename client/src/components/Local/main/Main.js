import React, { useState, useEffect } from 'react';
import '../../../css/main/Main.css';
import { words } from '../../../words';
import Products from '../products/Products';
import Filter from '../filter/Filter';
import axios from 'axios';
import axiosInstance from '../../Global/axiosConfig/axiosConfig';
// import data from '../../../data.json';
export default function Main() {
  const [productModal, setProductModal]= useState("");
  const [products, setProducts]= useState([]);
  const [category, setCategory]= useState("/"); // means get ALL product
  const [rate, setRate]= useState(""); // means get ALL product

  useEffect(()=>{
    axiosInstance
    .get(`${category}`)
    .then( (res)=> setProducts(res.data))
    .catch((err)=> Promise.reject(err));
  }, [category]);
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
    const newSort= [...products];
    setRate(ev.target.value);
    newSort.sort( 
      (a,b)=> ev.target.value == "Low"? a.rating.rate - b.rating.rate: b.rating.rate - a.rating.rate
      );
    setProducts(newSort);
  }
  return (
    <main>
      <Filter  category= {category} rate= {rate} changeCategory= {changeCategory} sortingByRate= {sortingByRate}/>
      <Products products= {products} productModal= {productModal} openModal= {openModal} closeModal= {closeModal}/>
      </main>
  )
}
