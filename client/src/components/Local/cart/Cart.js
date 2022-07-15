import React from 'react'
import '../../../css/cart/Cart.css';
export default function Cart({cartItems, removeFromCart}) {
  return (
    <section className='cart-wrapper'>
        <div className='cart-title'> 
          <p> {cartItems.length} Items In Cart</p> 
        </div>
        <hr/>
        <div className='cart-items'>
          {
            cartItems.map( item => (
              <div className='cart-item' key= {item.id}>
                <div className='item-info'>
                  <img src= {item.image} alt= {item.title} className='item-image'/>
                  <div>
                    <p> <b>item:</b> {item.title}</p>
                    <p> <b>Q:</b> {item.quantity}</p>
                    <p> <b>price:</b> ${item.price}</p>
                  </div>
                </div>
                <div className='remove-item'>
                  <button type= "button" role= "button" onClick={()=> removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          }
        </div>
    </section>
  )
}
