import React, { useEffect  , useContext, useState} from 'react';
import '../../../css/filter/Filter.css';
import Zoom from 'react-reveal/Zoom'
import { categoryContext } from '../../../contexts/categoryContext';
import { useDispatch, useSelector} from 'react-redux';

export default function Filter({SetCategory, sortingByRate}) {
  // const [category, setCategory] = useContext(categoryContext); // means get ALL product
  // const [rate, setRate] = useState(""); 
  const category= useSelector((state)=> state.category );
  const rate= useSelector((state)=> state.sortedProducts.sortedProducts);
  const numOfProducts= useSelector((state)=> state.products.products || []).length ;
  // const products= useSelector( (state)=> state.products.products) || [];
  const dispatch= useDispatch();

  // useEffect(() => {
  //   // console.log(category);
  //   dispatch(changeProducts(category));
  // }, [category]);

  


  return (
    <Zoom bottom>
        <div className='filter-wrapper'>
          <p className='filter-title'> Filter</p>
          <p className='product-number'> Number of products {numOfProducts} Product</p>
          <div className='filter-rate' >
              <span> Rate</span>
              <select value= {rate} onChange={(ev)=> sortingByRate(ev)}>
                  <option value= "" selected disabled></option>
                  <option value= "High">High To Low</option>
                  <option value= "Low">Low To High</option>
              </select>
          </div>
          <div className='filter-order'>
              <span> Order</span>
              <select  onChange={(ev)=> SetCategory(ev)}>
                  <option value= "All" selected >ALL</option>
                  <option value= "electronics">Electronics</option>
                  <option value= "jewelery">Jewelery</option>
                  <option value= "men's clothing">Men</option>
                  <option value= "women's clothing">Women</option>
              </select>
          </div>
        </div>
    </Zoom>
  )
}