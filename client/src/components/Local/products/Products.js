import React, { useState } from 'react';
import '../../../css/products/Products.css';
import ProductModal from './ProductModal';


export default function Products(props) {
    const [productModal, setProductModal]= useState("");
    const openModal= (product)=>{
        console.log(product)
        setProductModal(product);
    }

    const closeModal= ()=>{
        setProductModal(false);
    }

    return(
        <section className='wrapper'>
            <div className='filter-wrapper'>Filter</div>
            <div className='products-wrapper'>
                {
                    props.products.map(product => {
                        return (
                            <div key= {product.id} className= "product-item">
                                <img src= {product.imageUrl} alt= {product.title} onClick= {()=> openModal(product)}/>
                                <div className='product-desc'>
                                    <p> {product.title}</p>
                                    <p> {product.price}</p>
                                </div>
                                <button className='AddToCart' type='button' role= "button"> Add To Cart</button>
                            </div>
                            
                        );
                    })
                }
            </div>
            <ProductModal productInfo= {productModal} closeModal= {closeModal}/>
        </section>
    );
}