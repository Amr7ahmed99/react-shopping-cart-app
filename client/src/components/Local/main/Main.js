import React, { useState } from 'react';
import '../../../css/main/Main.css';
import { words } from '../../../words';
import data from '../../../data.json';
import Products from '../products/Products';
export default function Main() {
  const [products, setProducts]= useState(data);
  return (
    <main>
      <Products products= {products}/>
    </main>
  )
}
