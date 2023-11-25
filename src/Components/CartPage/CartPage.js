import React, { useContext } from 'react';
import { Products } from '../../Data/Data';
import { CartItem } from './CartItem';
import { ShopContext } from '../CartContext/ShopContext';
import './cartItem.css'
const CartPage = () => {
    const {cartItems, getTotalCartAmount}=useContext(ShopContext);
    const totalAmount=getTotalCartAmount();
  return (
    <div>
        <div className='cart-title'>
        <h1>YOUR CART ITEMS</h1>
        </div>
        <div className="cartItems">
            {Products.map((product)=>{
                if(cartItems[product.id]!==0){
                    return <CartItem data={product}/>
                }
            })}
        </div>
        <div className='bill-component'>
            <h1>Subtotal:{parseFloat(totalAmount.toFixed(2))}</h1>
            <button className='continue'>Continue Shopping</button>
            <button className='checkout'>Checkout</button>
        </div>
    </div>
  );
};

export default CartPage;
