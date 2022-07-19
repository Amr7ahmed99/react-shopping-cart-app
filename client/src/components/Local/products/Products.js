import React, { useState , useEffect} from 'react';
import '../../../css/products/Products.css';
import ProductModal from './ProductModal';
import Bounce from 'react-reveal/Bounce';


export default function Products({products, productModal, openModal, closeModal, addToCart}) {
    return(
        <>
            <div className='products-wrapper'>
                {
                    products
                        &&
                    products.map(product => {
                        return (
                            <Bounce bottom cascade key= {product.id}>
                                <div  className= "product-item">
                                    <img src= {product.image} alt= {product.title} onClick= {()=> openModal(product)}/>
                                    <div className='product-desc'>
                                        <p> {product.title}</p>
                                        <p> ${product.price}</p>
                                    </div>
                                    <p> rating: {product.rating.rate}</p>

                                    <button className='AddToCart' onClick= {()=> addToCart(product)} type='button' role= "button"> Add To Cart</button>
                                </div>
                            </Bounce>

                            
                        );
                    })
                    
                }
                
            </div>
            <ProductModal productInfo= {productModal} closeModal= {closeModal}/>
        </>
    );
}