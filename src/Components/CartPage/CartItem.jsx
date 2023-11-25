import React, { useContext } from 'react'
import './cartItem.css'
import { ShopContext } from '../CartContext/ShopContext';
export const CartItem = (props) => {
    const {id,
    name,
    description,
    price,
    category,
    brand,
    imageUrl
    }= props.data;
    const {cartItems, addToCart,removeFromCart, updateCartItem}=useContext(ShopContext);
  return (
    <div className='cart-container'>
    <div className='cart-item'>
      <img src={imageUrl} alt={name}/>
        <div className='description'>
            <p><b>{name}</b></p>
            <p>Rs {price}</p>   
            <p>Quantity: {cartItems[id]}</p> 
            <p className='price'><b>Price</b>: {parseFloat((cartItems[id]*price).toFixed(2))}</p>
            <div className='countHandler'>
            <button onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItem(Number(e.target.value),id)}/>
            <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>
    </div>
  )
}
