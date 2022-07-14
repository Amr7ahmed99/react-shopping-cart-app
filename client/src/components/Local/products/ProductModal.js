import React, {useState} from 'react'
import Modal from 'react-modal';
export default function ProductModal(props) {
    const {productInfo, closeModal}= props;//Destructing
  return (
    <Modal isOpen= {productInfo} onRequestClose= {closeModal}>
        <span className='close-Icon' onClick= {()=>closeModal()}> &times;</span>
        <div className='product-Modal'>
            <img src= {productInfo.image} alt= {productInfo.title}/>
            <div className='product-desc'>
                <p> {productInfo.title}</p>
                <p> ${productInfo.price}</p>
                <p> {productInfo.description}</p>
            </div>
        </div>
    </Modal>
  )
}
