import React, { useContext, useState } from 'react'
import '../../../css/cart/Cart.css';
import Checkout from '../checkout/Checkout';
import Fade from 'react-reveal/Fade'
import { cartContext } from '../../../contexts/cartContext';
import Modal from 'react-modal';

export default function Cart({cartItems, setCartItems}) {
  const [showForm, setShowForm]= useState(false);
  const [values, setValues]= useState("");
  const [order, setOrder]= useState(false);
  // const [cartItems, setCartItems]= useContext(cartContext);
  // const [cartItems, setCartItems]= useState( JSON.parse(localStorage.getItem("cartItems"))  || []);

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
    setOrder(order);
    // console.log(order);
  }


  const removeFromCart= (itemId)=>{
    const cartItemsClone= [...cartItems];
    setCartItems(cartItemsClone.filter( item=> (item.id !== itemId)));
  }

  const closeModal= ()=>{
    setOrder(false)
  };

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
                      <p> <b>price:</b> ${item.price * item.quantity}</p>
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
                return acc + (item.price * item.quantity);
              }, 0).toFixed(2)
            }
          </p>
        </div>
        <button className='go-checkout' onClick={()=> setShowForm(true)} type='button' role= "button">Go Checkout</button>
      </div>
      <Checkout showForm={showForm} setShowForm= {setShowForm} onSubmitOrder= {onSubmitOrder} handelChange= {handelChange}/>
      <Modal isOpen={order} onRequestClose= {closeModal}>
            <div className='order-Info'>
              <span className='close-Icon' onClick={closeModal}> <b>&times;</b> </span>
              <div className='alert-success'>
                <p>Order Done Success</p>
              </div>
              <table>
                <tr>
                  <td> <b>Name:</b></td>
                  <td>{order.name}</td>
                </tr>
                <tr>
                  <td><b>Email:</b></td>
                  <td>{order.email}</td>
                </tr>
                <tr>
                  <td><b>Totla:</b></td>
                  <td>{cartItems.reduce( (acc, pro)=> (acc+ (pro.price * pro.quantity)), 0)}$</td>
                </tr>
                <tr>
                  <td>
                    {cartItems.map(pro=>{
                      return(
                        <div className='cart-product' key={pro.id}>
                          <img
                            src={pro.image}
                            alt={pro.title}
                          />
                            <p> <b>Title: </b>{pro.title} <br/> <b>Quantity:</b> {pro.quantity}</p>
                        </div>
                         
                      );
                    })}
                  </td>
                </tr>
              </table>
            </div>
      </Modal>
    </section>
  )
}