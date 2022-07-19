import React, { useState } from 'react'
import '../../../css/cart/Cart.css';
import Checkout from '../checkout/Checkout';
import Fade from 'react-reveal/Fade'
export default function Cart({cartItems, removeFromCart}) {
  const [showForm, setShowForm]= useState(false);
  const [values, setValues]= useState("");
  const handelChange= (e)=>{
    setValues( (oldState)=> {
      return {...oldState, [e.target.name]: e.target.value}
    });
  }

  const onSubmitOrder= (e)=>{
    e.preventDefault();
    const order= {
      name: values.name,
      email: values.email
    }
    // console.log(order);
  }
  return (
    <section className='cart-wrapper'>
        <div className='cart-title'> 
          <p> {cartItems.length} Items In Cart</p> 
        </div>
        <Fade left cascade>
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
        </Fade>

        <div className='cart-checkout'>
          <div className='total-price'>
            <p> 
              Total: $
              {
                cartItems.reduce((acc, item)=>{
                  return acc + item.price;
                }, 0).toFixed(2)
              }
            </p>
          </div>
          <button className='go-checkout' onClick={()=> setShowForm(true)} type='button' role= "button">Go Checkout</button>
        </div>
        
        <Checkout showForm={showForm} setShowForm= {setShowForm} onSubmitOrder= {onSubmitOrder} handelChange= {handelChange}/>

    </section>
  )
}
