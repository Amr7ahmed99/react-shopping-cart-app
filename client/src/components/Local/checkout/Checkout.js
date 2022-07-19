import React from 'react'
import Fade from "react-reveal/Fade"
import '../../../css/checkout/Checkout.css';
export default function Checkout({showForm, setShowForm, onSubmitOrder, handelChange}) {
  return (
    <>
        {
            showForm
            &&
            (
            <div className='checkout-form'>
                <Fade left >
                    <form method= "GET" action= "#" onSubmit={onSubmitOrder}>
                    <span className= "close-checkout" onClick={()=> setShowForm(false)}> &times;</span>
                    <div className='form-group'>
                        <label htmlFor='name'> Name</label>
                        <input type= "text" onChange={(e)=> handelChange(e)} required name= "name" id="name"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'> Email</label>
                        <input type= "email" onChange={(e)=> handelChange(e)} required name= "email" id="email"/>
                    </div>
                    <div className='form-group'>
                        <button type= "submit" role= "button"> Checkout </button>
                    </div>
                    </form>
                </Fade>
            </div>
            )
        }
    </>
  )
}
