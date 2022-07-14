import React, { useState , useEffect} from 'react';
import '../../../css/products/Products.css';
import ProductModal from './ProductModal';



export default function Products({products, productModal, openModal, closeModal}) {
    return(
        <>
            <div className='products-wrapper'>
                {
                    products
                        &&
                    products.map(product => {
                        return (
                            <div key= {product.id} className= "product-item">
                                <img src= {product.image} alt= {product.title} onClick= {()=> openModal(product)}/>
                                <div className='product-desc'>
                                    <p> {product.title}</p>
                                    <p> ${product.price}</p>
                                </div>
                                <p> rating: {product.rating.rate}</p>

                                <button className='AddToCart' type='button' role= "button"> Add To Cart</button>
                            </div>
                            
                        );
                    })
                    
                }
                
            </div>
            <ProductModal productInfo= {productModal} closeModal= {closeModal}/>
        </>
    );
}