import React, { useEffect } from 'react';
import '../../../css/filter/Filter.css';
export default function Filter({numOfProducts, category, rate, changeCategory, sortingByRate}) {
    
  return (
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
            <select  onChange={(ev)=> changeCategory(ev)}>
                <option value= "All" selected >ALL</option>
                <option value= "electronics">Electronics</option>
                <option value= "jewelery">Jewelery</option>
                <option value= "men's clothing">Men</option>
                <option value= "women's clothing">Women</option>
            </select>
        </div>

    </div>
  )
}
